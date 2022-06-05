import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeInfoPageRoutingModule } from './stage-six-software-task-three-info-routing.module';

import { StageSixSoftwareTaskThreeInfoPage } from './stage-six-software-task-three-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskThreeInfoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskThreeInfoPage]
})
export class StageSixSoftwareTaskThreeInfoPageModule {}
