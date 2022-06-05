import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskThreeQuestionOnePage } from './stage-six-software-task-three-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskThreeQuestionOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskThreeQuestionOnePageRoutingModule {}
