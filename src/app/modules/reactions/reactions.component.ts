import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Reaction } from 'src/app/providers';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionsComponent {
  @Input() reactions: Reaction[] | null;

  @Output() onVideoTimeframe = new EventEmitter<number>();
}
