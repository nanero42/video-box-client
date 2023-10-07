import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GridTab, Icons } from 'src/app/providers';

@Component({
  selector: 'app-tabs-buttons',
  templateUrl: './tabs-buttons.component.html',
  styleUrls: ['./tabs-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsButtonsComponent {
  @Input() tabs: GridTab[] = [
    {
      id: 0,
      icon: Icons.gridCard,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
    {
      id: 1,
      icon: Icons.gridCompact,
      width: '22px',
      height: '22px',
      fillPath: '#000',
    },
  ];

  readonly Icons = Icons;

  activeTab = 0;

  setActiveTab(id: number) {
    this.activeTab = id;
  }
}
