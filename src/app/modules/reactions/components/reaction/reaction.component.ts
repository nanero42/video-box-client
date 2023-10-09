import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Author, ReactionType, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionComponent {
  @Input() id?: string;
  @Input() videoId?: string;
  @Input() author?: Author;
  @Input() postedDate?: Date;
  @Input() createdDate?: Date;
  @Input() timeframe?: number;
  @Input() imageUrl?: string;
  @Input() type?: ReactionType;

  readonly secondsToHHMMSS = secondsToHHMMSS;
}
