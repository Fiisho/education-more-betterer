import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageSixSelectionPageRoutingModule } from './stage-six-selection-routing.module';

import { StageSixSelectionPage } from './stage-six-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageSixSelectionPageRoutingModule
  ],
  declarations: [StageSixSelectionPage]
})
export class StageSixSelectionPageModule {}
