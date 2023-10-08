import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ReactionService, VideoService } from 'src/app/providers';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit, OnDestroy {
  private destroyStream$ = new Subject<void>();

  itemId = this.route.snapshot.params['id'];
  videoItem$ = this.videoService.item$;
  reactionItem$ = this.reactionService.item$;

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
    this.reactionService.loadVideo$(this.route).pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }
}
