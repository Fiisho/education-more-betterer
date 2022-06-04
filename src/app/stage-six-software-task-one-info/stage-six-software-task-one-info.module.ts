import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneInfoPageRoutingModule } from './stage-six-software-task-one-info-routing.module';

import { StageSixSoftwareTaskOneInfoPage } from './stage-six-software-task-one-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskOneInfoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskOneInfoPage]
})
export class StageSixSoftwareTaskOneInfoPageModule {}
