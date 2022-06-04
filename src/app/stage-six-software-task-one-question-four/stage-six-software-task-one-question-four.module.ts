import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionFourPageRoutingModule } from './stage-six-software-task-one-question-four-routing.module';

import { StageSixSoftwareTaskOneQuestionFourPage } from './stage-six-software-task-one-question-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskOneQuestionFourPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskOneQuestionFourPage]
})
export class StageSixSoftwareTaskOneQuestionFourPageModule {}
