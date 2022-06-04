import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionOnePageRoutingModule } from './stage-six-software-task-one-question-one-routing.module';

import { StageSixSoftwareTaskOneQuestionOnePage } from './stage-six-software-task-one-question-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSoftwareTaskOneQuestionOnePageRoutingModule
  ],
  declarations: [StageSixSoftwareTaskOneQuestionOnePage]
})
export class StageSixSoftwareTaskOneQuestionOnePageModule {}
