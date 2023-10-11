import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Reaction, ReactionService, ReactionType, VideoService, takeScreenshot } from 'src/app/providers';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit, OnDestroy {
  private destroyStream$ = new Subject<void>();

  currentVideoElement: HTMLVideoElement;
  currentVideoTime: number;
  videoId = this.route.snapshot.params['id'];
  videoItem$ = this.videoService.item$;
  reactionItem$ = this.reactionService.item$;

  videoTimeframe = 0;

  starred = false;

  constructor (
    private route: ActivatedRoute,
    private videoService: VideoService,
    private reactionService: ReactionService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadVideo();
    this.loadReaction();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  private loadVideo() {
    this.videoService.loadVideo$(this.route).pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }

  private loadReaction() {
    this.reactionService.loadReactions$(this.route).pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }

  takeSnapshot() {
    const reaction: Reaction = {
      videoId: this.videoId,
      type: ReactionType.snapshot,
      timeframe: this.currentVideoElement.currentTime,
      dataUri: takeScreenshot(this.currentVideoElement),
    };

    this.reactionService.saveReaction$(reaction).pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }

  star() {
    this.starred = true;

    setTimeout(() => {
      this.starred = false;

      this.cdr.detectChanges();
    }, 1000);

    const reaction: Reaction = {
      videoId: this.videoId,
      type: ReactionType.star,
      timeframe: this.currentVideoElement.currentTime,
    };

    this.reactionService.saveReaction$(reaction).pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }
}
