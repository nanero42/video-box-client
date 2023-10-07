import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { IconComponent } from './icon';



@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IconComponent,
  ]
})
export class ComponentsModule { }
