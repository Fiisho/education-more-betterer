import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionFourPageRoutingModule } from './stage-six-software-task-two-question-four-routing.module';

import { StageSixSoftwareTaskTwoQuestionFourPage } from './stage-six-software-task-two-question-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskTwoQuestionFourPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskTwoQuestionFourPage]
})
export class StageSixSoftwareTaskTwoQuestionFourPageModule {}
