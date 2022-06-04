import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskOneQuestionTwoPage } from './stage-six-software-task-one-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskOneQuestionTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskOneQuestionTwoPageRoutingModule {}
