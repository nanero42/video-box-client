import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icons } from 'src/app/providers';
import { Video } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent {
  @Input() videos: Video[] | null = [];

  readonly Icons = Icons;

  currentTab: Icons = Icons.gridStyleCard;

  setCurrentTab(iconName: Icons) {
    this.currentTab = iconName;
  }
}
