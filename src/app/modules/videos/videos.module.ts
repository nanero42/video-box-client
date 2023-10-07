import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoComponent } from './components/video/video.component';



@NgModule({
  declarations: [
    VideosComponent,
    VideoComponent,
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
