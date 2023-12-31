import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, Inject, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, takeUntil, tap } from 'rxjs';
import { Icons, KeyboardCode, secondsToHHMMSS, videoTimeframe } from 'src/app/providers';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoplayerComponent implements AfterViewInit, OnDestroy {
  private destroyStream$ = new Subject<void>();
  private _videoTimeframe: number | null;

  readonly Icons = Icons;

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('line') line: ElementRef<HTMLDivElement>;
  @ViewChild('starIcon', { read: ElementRef<HTMLOrSVGElement> }) starIcon: ElementRef<HTMLOrSVGElement>;

  @Input() starred = false;
  @Input() url?: string = '';
  @Input()
  set videoTimeframe(videoTimeframe: number | null) {
    this._videoTimeframe = videoTimeframe;
    this.rewindToPointAndPuse(this?.video?.nativeElement);
  }
  get videoTimeframe() { return this._videoTimeframe; }

  @Output() getVideoElement = new EventEmitter<HTMLVideoElement>();
  @Output() getCurrentVideoTime = new EventEmitter<number>();

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
    this.initVideoProgressAndDuration();
    this.toggleVideoOnSpacePressed();
    this.backVideoOnFiveSecond();
    this.forwardVideoOnFiveSecond();
    this.rewindVideoToPoint();

    this.getVideoElement.emit(this.video.nativeElement);
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  private rewindToPointAndPuse(video: HTMLVideoElement) {
    if (!video) return;

    this.progress = this.videoTimeframe || 0;
    video.currentTime = this.videoTimeframe || 0;
    this.progressHHMMSS = secondsToHHMMSS(this.videoTimeframe);
    video.pause();
    this.isVideoPlaying = false;
  }

  private toggleVideoOnSpacePressed() {
    fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
      takeUntil(this.destroyStream$),
      tap((e) => {
        if (e.code === KeyboardCode.Space) {
          e.preventDefault();
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

  private initVideoProgressAndDuration() {
    fromEvent(this.video.nativeElement, 'timeupdate').pipe(
      takeUntil(this.destroyStream$),
      tap(({ target }) => {
        if (!target) return;

        if (target instanceof HTMLMediaElement) {
          this.progress = target.currentTime;
          this.duration = target.duration;
          this.getCurrentVideoTime.emit(this.video.nativeElement.currentTime);
        }

        this.durationHHMMSS = secondsToHHMMSS(this.video.nativeElement.duration);
        this.progressHHMMSS = secondsToHHMMSS(this.progress);

        if (this.progress >= this.duration) {
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

        this.video.nativeElement.currentTime = xPointInsideLineInt / lineWidth * (this.duration || this.video.nativeElement.duration);

        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  toggleVideo() {
    if (!this.isVideoPlaying) {
      this.video.nativeElement.play();
    } else {
      this.video.nativeElement.pause();
    }

    this.isVideoPlaying = !this.isVideoPlaying;

    this.cdr.detectChanges();
  }
}
