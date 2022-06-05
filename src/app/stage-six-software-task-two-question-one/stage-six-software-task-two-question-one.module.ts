import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionOnePageRoutingModule } from './stage-six-software-task-two-question-one-routing.module';

import { StageSixSoftwareTaskTwoQuestionOnePage } from './stage-six-software-task-two-question-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskTwoQuestionOnePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskTwoQuestionOnePage]
})
export class StageSixSoftwareTaskTwoQuestionOnePageModule {}
