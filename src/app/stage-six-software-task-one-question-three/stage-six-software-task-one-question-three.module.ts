import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionThreePageRoutingModule } from './stage-six-software-task-one-question-three-routing.module';

import { StageSixSoftwareTaskOneQuestionThreePage } from './stage-six-software-task-one-question-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskOneQuestionThreePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskOneQuestionThreePage]
})
export class StageSixSoftwareTaskOneQuestionThreePageModule {}
