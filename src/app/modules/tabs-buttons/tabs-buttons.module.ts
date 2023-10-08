import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components';
import { TabsButtonsComponent } from './tabs-buttons.component';
import { TabButtonComponent } from './components/tab-button/tab-button.component';



@NgModule({
  declarations: [
    TabsButtonsComponent,
    TabButtonComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    TabsButtonsComponent,
  ],
})
export class TabsButtonsModule { }
