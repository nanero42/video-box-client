import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
  videoId = this.route.snapshot.params['id'];
  videoItem$ = this.videoService.item$;
  reactionItem$ = this.reactionService.item$;

  Object = Object;

  videoTimeframe = 0;

  constructor (
    private route: ActivatedRoute,
    private videoService: VideoService,
    private reactionService: ReactionService,
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
    console.log(this.currentVideoElement.currentTime);

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
