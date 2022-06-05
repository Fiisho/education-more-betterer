import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskTwoQuestionFourPage } from './stage-six-software-task-two-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskTwoQuestionFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskTwoQuestionFourPageRoutingModule {}
