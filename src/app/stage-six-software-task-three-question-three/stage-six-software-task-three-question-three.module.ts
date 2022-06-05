import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionThreePageRoutingModule } from './stage-six-software-task-three-question-three-routing.module';

import { StageSixSoftwareTaskThreeQuestionThreePage } from './stage-six-software-task-three-question-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskThreeQuestionThreePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskThreeQuestionThreePage]
})
export class StageSixSoftwareTaskThreeQuestionThreePageModule {}
