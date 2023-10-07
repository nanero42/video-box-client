import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Video } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent {
  @Input() videos: Video[] | null = [];
}
