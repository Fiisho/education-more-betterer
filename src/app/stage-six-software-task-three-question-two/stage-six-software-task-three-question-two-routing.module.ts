import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskThreeQuestionTwoPage } from './stage-six-software-task-three-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskThreeQuestionTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskThreeQuestionTwoPageRoutingModule {}
