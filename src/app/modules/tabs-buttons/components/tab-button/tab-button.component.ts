import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GridTab, Icons } from 'src/app/providers';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabButtonComponent {
  @Input() currentTab = 0;
  @Input() id = 0;
  @Input() icon: Icons;
  @Input() width?: string = '';
  @Input() height?: string = '';
  @Input() fillSvg?: string = '';
  @Input() fillPath?: string = '';

  @Output() activeTab = new EventEmitter<number>();
}
