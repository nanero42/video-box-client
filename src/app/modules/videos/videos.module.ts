import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';



@NgModule({
  declarations: [
    VideosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    VideosComponent,
  ],
})
export class VideosModule { }
