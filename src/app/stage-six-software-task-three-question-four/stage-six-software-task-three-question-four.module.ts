import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionFourPageRoutingModule } from './stage-six-software-task-three-question-four-routing.module';

import { StageSixSoftwareTaskThreeQuestionFourPage } from './stage-six-software-task-three-question-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskThreeQuestionFourPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskThreeQuestionFourPage]
})
export class StageSixSoftwareTaskThreeQuestionFourPageModule {}
