import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskThreeQuestionFourPage } from './stage-six-software-task-three-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskThreeQuestionFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskThreeQuestionFourPageRoutingModule {}
