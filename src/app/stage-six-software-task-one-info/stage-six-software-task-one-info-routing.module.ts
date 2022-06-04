import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSoftwareTaskOneInfoPage } from './stage-six-software-task-one-info.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSoftwareTaskOneInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSoftwareTaskOneInfoPageRoutingModule {}
