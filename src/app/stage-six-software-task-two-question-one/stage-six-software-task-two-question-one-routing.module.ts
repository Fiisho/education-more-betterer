import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskTwoQuestionOnePage } from './stage-six-software-task-two-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskTwoQuestionOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskTwoQuestionOnePageRoutingModule {}
