import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskThreeQuestionThreePage } from './stage-six-software-task-three-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskThreeQuestionThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskThreeQuestionThreePageRoutingModule {}
