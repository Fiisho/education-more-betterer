import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionThreePageRoutingModule } from './stage-six-software-task-two-question-three-routing.module';

import { StageSixSoftwareTaskTwoQuestionThreePage } from './stage-six-software-task-two-question-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskTwoQuestionThreePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskTwoQuestionThreePage]
})
export class StageSixSoftwareTaskTwoQuestionThreePageModule {}
