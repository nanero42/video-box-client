import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonCategory, Icons } from 'src/app/providers';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title = 'No title';
  @Input() icon: Icons;
  @Input() fillSvg = '';
  @Input() fillPath = '';
  @Input() category: ButtonCategory = ButtonCategory.primary;

  readonly ButtonCategory = ButtonCategory;
  readonly Icons = Icons;
}
