import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icons } from 'src/app/providers';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input({ required: true }) name: Icons;
  @Input() width = '22px';
  @Input() height = '22px';

  Icons = Icons;
}
