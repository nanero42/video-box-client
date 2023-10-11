import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { IconComponent } from './icon';
import { ProfileComponent } from './profile';
import { ButtonComponent } from './button';
import { InputComponent } from './input';



@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    ProfileComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class ComponentsModule { }
