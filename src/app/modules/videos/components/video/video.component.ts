import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent {
  @Input() previewUrl = '';
  @Input() title = '';
  @Input() createdDate: Date = new Date();
}
