import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grid-buttons',
  templateUrl: './grid-buttons.component.html',
  styleUrls: ['./grid-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridButtonsComponent {
  activeTab = 1;

  setActiveTab(id: number) {
    this.activeTab = id;
  }
}
