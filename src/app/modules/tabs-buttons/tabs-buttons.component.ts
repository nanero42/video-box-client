import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TabStyle, Icons } from 'src/app/providers';

@Component({
  selector: 'app-tabs-buttons',
  templateUrl: './tabs-buttons.component.html',
  styleUrls: ['./tabs-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsButtonsComponent {
  @Input() tabs: TabStyle[] = [
    {
      iconName: Icons.gridStyleCard,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
    {
      iconName: Icons.gridStyleCompact,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
  ];

  @Output() onCurrentTab = new EventEmitter<Icons>();

  readonly Icons = Icons;

  currentTab: Icons = Icons.gridStyleCard;

  setCurrentTab(iconName: Icons) {
    this.currentTab = iconName;

    this.onCurrentTab.emit(iconName);
  }
}
