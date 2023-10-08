import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { IconComponent } from './icon';
import { ProfileComponent } from './profile';



@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
  ]
})
export class ComponentsModule { }
