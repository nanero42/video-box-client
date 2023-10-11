import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { ComponentsModule } from 'src/app/components';
import { VideoplayerModule } from 'src/app/modules';
import { ReactionsModule } from 'src/app/modules/reactions/reactions.module';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    ComponentsModule,
    VideoplayerModule,
    ReactionsModule,
  ]
})
export class VideosModule { }
