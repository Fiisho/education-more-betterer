import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskTwoInfoPage } from './stage-six-software-task-two-info.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskTwoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskTwoInfoPageRoutingModule {}
