import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoComponent } from './components/video/video.component';
import { TabsButtonsModule } from '../tabs-buttons';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VideosComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TabsButtonsModule,
    RouterModule,
  ],
  exports: [
    VideosComponent,
  ],
})
export class VideosModule { }
