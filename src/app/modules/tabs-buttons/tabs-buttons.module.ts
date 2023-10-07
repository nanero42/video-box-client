import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components';
import { TabsButtonsComponent } from './tabs-buttons.component';



@NgModule({
  declarations: [
    TabsButtonsComponent,
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
