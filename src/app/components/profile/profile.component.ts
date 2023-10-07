import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() name = 'Eduard';
  @Input() image = 'assets/images/avatar.jpg';
  @Input() avatarWidth = '32px';
  @Input() avatarHeight = '32px';
}
