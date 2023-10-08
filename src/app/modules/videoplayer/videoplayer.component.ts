import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';
import { Icons, KeyboardCode, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoplayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  @Input() url?: string = '';

  readonly Icons = Icons;

  private destroyStream$ = new Subject<void>();

  isVideoPlaying = false;
  progress = 0;
  progressHHMMSS = '00:00:00';
  duration = 0;
  durationHHMMSS = '00:00:00';

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit(): void {
    this.initVideoDuration();
    this.initVideoProgressAndDuration();
    this.toggleVideoOnSpacePressed();
    this.backVideoOnFiveSecond();
    this.forwardVideoOnFiveSecond();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  private toggleVideoOnSpacePressed() {
    fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
      takeUntil(this.destroyStream$),
      tap(({ code }) => {
        if (code === KeyboardCode.Space) {
          this.toggleVideo();
        }
      }),
    ).subscribe();
  }

  private backVideoOnFiveSecond() {
    fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
      takeUntil(this.destroyStream$),
      tap(({ code }) => {
        if (code === KeyboardCode.ArrowLeft) {
          const video = this.video.nativeElement as HTMLMediaElement;
          video.currentTime -= 5;

          this.cdr.detectChanges();
        }
      }),
    ).subscribe();
  }

  private forwardVideoOnFiveSecond() {
    fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
      takeUntil(this.destroyStream$),
      tap(({ code }) => {
        if (code === KeyboardCode.ArrowRight) {
          const video = this.video.nativeElement as HTMLMediaElement;
          video.currentTime += 5;

          this.cdr.detectChanges();
        }
      }),
    ).subscribe();
  }

  private initVideoDuration() {
    fromEvent(this.video.nativeElement, 'canplay').pipe(
      takeUntil(this.destroyStream$),
      tap(() => {
        this.durationHHMMSS = secondsToHHMMSS(this.video.nativeElement.duration);

        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  private initVideoProgressAndDuration() {
    fromEvent(this.video.nativeElement, 'timeupdate').pipe(
      takeUntil(this.destroyStream$),
      tap(({ target }) => {
        if (!target) return;

        if (target instanceof HTMLMediaElement) {
          this.progress = target.currentTime;
          this.duration = target.duration;
        }

        this.progressHHMMSS = secondsToHHMMSS(this.progress);

        if (this.progress === this.duration) {
          this.isVideoPlaying = false;
          this.progress = 0;
          this.duration = 0;
        }

        this.cdr.detectChanges();
      }),
    ).subscribe();
  }

  toggleVideo() {
    if (!this.video) {
      return;
    }

    if (!this.isVideoPlaying) {
      this.video.nativeElement.play();
    } else {
      this.video.nativeElement.pause();
    }

    this.isVideoPlaying = !this.isVideoPlaying;
  }
}
