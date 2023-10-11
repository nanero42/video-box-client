import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionsComponent } from './reactions.component';
import { ComponentsModule } from 'src/app/components';
import { ReactionComponent } from './components';



@NgModule({
  declarations: [
    ReactionsComponent,
    ReactionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ReactionsComponent,
  ],
})
export class ReactionsModule { }
