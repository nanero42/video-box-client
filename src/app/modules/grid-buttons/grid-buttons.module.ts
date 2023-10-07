import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridButtonsComponent } from './grid-buttons.component';
import { ComponentsModule } from 'src/app/components';



@NgModule({
  declarations: [
    GridButtonsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    GridButtonsComponent,
  ],
})
export class GridButtonsModule { }
