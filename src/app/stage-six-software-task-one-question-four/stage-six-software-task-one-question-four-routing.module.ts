import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskOneQuestionFourPage } from './stage-six-software-task-one-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskOneQuestionFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskOneQuestionFourPageRoutingModule {}
