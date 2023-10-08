import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';
import { Icons } from 'src/app/providers';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoplayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  readonly Icons = Icons;

  private destroyStream$ = new Subject<void>();

  isVideoPlaying = false;
  progress = 0;
  duration = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.watchVideo();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  private watchVideo() {
    fromEvent(this.video.nativeElement, 'timeupdate').pipe(
      takeUntil(this.destroyStream$),
      tap(({ target }) => {
        if (!target) return;

        if (target instanceof HTMLMediaElement) {
          this.progress = target.currentTime;
          this.duration = target.duration;
        }

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
