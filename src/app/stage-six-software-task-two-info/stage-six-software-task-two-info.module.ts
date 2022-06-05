import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoInfoPageRoutingModule } from './stage-six-software-task-two-info-routing.module';

import { StageSixSoftwareTaskTwoInfoPage } from './stage-six-software-task-two-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskTwoInfoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskTwoInfoPage]
})
export class StageSixSoftwareTaskTwoInfoPageModule {}
