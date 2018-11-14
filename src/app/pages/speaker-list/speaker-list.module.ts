import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChartsModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}
