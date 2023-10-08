import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { IconComponent } from './icon';
import { ProfileComponent } from './profile';
import { ButtonComponent } from './button';



@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule { }
