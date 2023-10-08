import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons } from 'src/app/providers';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent {
  readonly Icons = Icons;
}
