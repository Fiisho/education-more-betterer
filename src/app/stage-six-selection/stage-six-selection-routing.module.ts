import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageSixSelectionPage } from './stage-six-selection.page';

const routes: Routes = [
  {
    path: '',
    component: StageSixSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageSixSelectionPageRoutingModule {}
