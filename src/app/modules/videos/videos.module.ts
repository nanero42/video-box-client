import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoComponent } from './components/video/video.component';
import { GridButtonsModule } from '../grid-buttons';



@NgModule({
  declarations: [
    VideosComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    GridButtonsModule,
  ],
  exports: [
    VideosComponent,
  ],
})
export class VideosModule { }
