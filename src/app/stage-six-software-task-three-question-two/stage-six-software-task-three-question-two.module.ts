import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionTwoPageRoutingModule } from './stage-six-software-task-three-question-two-routing.module';

import { StageSixSoftwareTaskThreeQuestionTwoPage } from './stage-six-software-task-three-question-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskThreeQuestionTwoPageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskThreeQuestionTwoPage]
})
export class StageSixSoftwareTaskThreeQuestionTwoPageModule {}
