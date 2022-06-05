import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskTwoQuestionTwoPage } from './stage-six-software-task-two-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskTwoQuestionTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskTwoQuestionTwoPageRoutingModule {}
