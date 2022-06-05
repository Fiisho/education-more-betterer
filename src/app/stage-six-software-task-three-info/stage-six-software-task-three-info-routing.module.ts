import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskThreeInfoPage } from './stage-six-software-task-three-info.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskThreeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskThreeInfoPageRoutingModule {}
