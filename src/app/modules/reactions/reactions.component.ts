import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Reaction } from 'src/app/providers';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionsComponent {
  private _reactions: Reaction[] | null;

  @Input() currentVideoElement: HTMLVideoElement | null;
  @Input() currentVideoTime: number | null;
  @Input()
  set reactions(reactions: Reaction[] | null) {
    if (!reactions?.length) return;

    this._reactions = reactions.sort((a: any, b: any) => a.timeframe - b.timeframe);
  }
  get reactions() {
    return this._reactions;
  }

  @Output() onVideoTimeframe = new EventEmitter<number>();
}
