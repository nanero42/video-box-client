import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icons } from 'src/app/providers';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent {
  @Input() gridStyle: Icons = Icons.gridStyleCompact;
  @Input() previewUrl = '';
  @Input() title = '';
  @Input() createdDate: Date = new Date();

  readonly Icons = Icons;
}
