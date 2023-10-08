import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionsComponent {}
