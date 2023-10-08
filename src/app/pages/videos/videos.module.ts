import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoplayerModule } from 'src/app/modules/videoplayer';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    ComponentsModule,
    VideoplayerModule,
  ]
})
export class VideosModule { }
