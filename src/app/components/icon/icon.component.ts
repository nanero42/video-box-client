import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icons, ReactionType } from 'src/app/providers';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input({ required: true }) name: Icons;
  @Input() width?: string = '22px';
  @Input() height?: string = '22px';
  @Input() fillSvg?: string = '#FFF';
  @Input() fillPath?: string = '#FFF';

  readonly Icons = Icons;
  readonly ReactionType = ReactionType;
}
