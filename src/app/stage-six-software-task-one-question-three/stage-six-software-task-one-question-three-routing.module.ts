import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskOneQuestionThreePage } from './stage-six-software-task-one-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskOneQuestionThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskOneQuestionThreePageRoutingModule {}
