import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';
import { Icons, KeyboardCode, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoplayerComponent implements DoCheck, AfterViewInit, OnDestroy {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('line') line: ElementRef<HTMLDivElement>;

  @Input() url?: string = '';
  @Input() videoTimeframe = 0;

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

  ngDoCheck(): void {
    const video = this?.video?.nativeElement;

    if (video) {
      const timeframeInSeconds = this.videoTimeframe * 10;

      video.currentTime = timeframeInSeconds;
      this.progress = timeframeInSeconds;
      this.progressHHMMSS = secondsToHHMMSS(timeframeInSeconds);
    }
  }

  ngAfterViewInit(): void {
    this.initVideoDuration();
    this.initVideoProgress();
    this.toggleVideoOnSpacePressed();
    this.backVideoOnFiveSecond();
    this.forwardVideoOnFiveSecond();
    this.rewindVideoToPoint();
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
        this.duration = this.video.nativeElement.duration;
        this.durationHHMMSS = secondsToHHMMSS(this.video.nativeElement.duration);

        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  private initVideoProgress() {
    fromEvent(this.video.nativeElement, 'timeupdate').pipe(
      takeUntil(this.destroyStream$),
      tap(({ target }) => {
        if (!target) return;

        if (target instanceof HTMLMediaElement) {
          this.progress = target.currentTime;
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

  private rewindVideoToPoint() {
    fromEvent<PointerEvent>(this.line.nativeElement, 'click').pipe(
      takeUntil(this.destroyStream$),
      tap((click) => {
        const xPoint = click.clientX;
        const lineDimensions = this.line.nativeElement.getBoundingClientRect();
        const lineWidth = lineDimensions.right - lineDimensions.left;
        const distanceFromLeftScreenSideToLineLeftSide = lineDimensions.left;
        const xPointInsideLine = xPoint - distanceFromLeftScreenSideToLineLeftSide;
        const xPointInsideLineInt = xPointInsideLine;

        this.video.nativeElement.currentTime = xPointInsideLineInt / lineWidth * this.duration;

        this.cdr.detectChanges();
      })
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
