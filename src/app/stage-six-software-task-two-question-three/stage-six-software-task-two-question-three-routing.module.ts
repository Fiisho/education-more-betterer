import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskTwoQuestionThreePage } from './stage-six-software-task-two-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskTwoQuestionThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskTwoQuestionThreePageRoutingModule {}
