import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionTwoPageRoutingModule } from './stage-six-software-task-two-question-two-routing.module';

import { StageSixSoftwareTaskTwoQuestionTwoPage } from './stage-six-software-task-two-question-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskTwoQuestionTwoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskTwoQuestionTwoPage]
})
export class StageSixSoftwareTaskTwoQuestionTwoPageModule {}
