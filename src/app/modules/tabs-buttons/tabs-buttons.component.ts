import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
      id: 0,
      icon: Icons.gridStyleCard,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
    {
      id: 1,
      icon: Icons.gridStyleCompact,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
  ];

  readonly Icons = Icons;

  currentTab = 0;

  setCurrentTab(id: number) {
    this.currentTab = id;
  }
}
