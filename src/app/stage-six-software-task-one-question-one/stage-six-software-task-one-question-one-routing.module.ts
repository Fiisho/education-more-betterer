import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskOneQuestionOnePage } from './stage-six-software-task-one-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskOneQuestionOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskOneQuestionOnePageRoutingModule {}
