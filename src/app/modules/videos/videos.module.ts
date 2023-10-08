import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoComponent } from './components/video/video.component';
import { TabsButtonsModule } from '../tabs-buttons';



@NgModule({
  declarations: [
    VideosComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TabsButtonsModule,
  ],
  exports: [
    VideosComponent,
  ],
})
export class VideosModule { }
