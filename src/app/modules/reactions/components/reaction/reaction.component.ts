import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Author, ReactionType, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionComponent implements OnChanges {
  @Input() id = '';
  @Input() videoId = '';
  @Input() author: Author;
  @Input() postedDate?: Date = new Date();
  @Input() createdDate?: Date = new Date();
  @Input() timeframe = 0;
  @Input() imageUrl?: string = '';
  @Input() type = ReactionType.star;

  readonly secondsToHHMMSS = secondsToHHMMSS;

  ngOnChanges(): void {
    console.log(this.timeframe);

    console.log(secondsToHHMMSS(this.timeframe));
  }
}
