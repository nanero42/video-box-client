import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoplayerComponent } from './videoplayer.component';
import { ComponentsModule } from 'src/app/components';



@NgModule({
  declarations: [
    VideoplayerComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    VideoplayerComponent,
  ],
})
export class VideoplayerModule { }
