import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactionType, secondsToHHMMSS } from 'src/app/providers';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionComponent {
  reactionType = ReactionType.star;
  reactionUrl = 'https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=2048x2048&w=is&k=20&c=XAFzMrxYXcR3XR3pvSbovXWxH8CD3q9fPkP-Jnf3qF8=';
  reactionDate = new Date();
  reactionAuthor = 'Eduard created a snapshot';
  reactionTime = secondsToHHMMSS(13 * 60 * 66);
}
