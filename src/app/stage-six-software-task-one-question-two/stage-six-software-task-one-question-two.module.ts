import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionTwoPageRoutingModule } from './stage-six-software-task-one-question-two-routing.module';

import { StageSixSoftwareTaskOneQuestionTwoPage } from './stage-six-software-task-one-question-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskOneQuestionTwoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskOneQuestionTwoPage]
})
export class StageSixSoftwareTaskOneQuestionTwoPageModule {}
