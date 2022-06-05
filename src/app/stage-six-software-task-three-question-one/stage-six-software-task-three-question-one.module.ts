import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionOnePageRoutingModule } from './stage-six-software-task-three-question-one-routing.module';

import { StageSixSoftwareTaskThreeQuestionOnePage } from './stage-six-software-task-three-question-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskThreeQuestionOnePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskThreeQuestionOnePage]
})
export class StageSixSoftwareTaskThreeQuestionOnePageModule {}
