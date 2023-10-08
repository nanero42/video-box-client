import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Author, ReactionType, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionComponent {
  @Input() id = '';
  @Input() videoId = '';
  @Input() author: Author;
  @Input() postedDate?: Date = new Date();
  @Input() createdDate?: Date = new Date();
  @Input() timeframe = 0;
  @Input() imageUrl?: string = '';
  @Input() type = ReactionType.star;

  readonly secondsToHHMMSS = secondsToHHMMSS;
}
