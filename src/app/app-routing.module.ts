import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'stage-six-selection',
    loadChildren: () => import('./stage-six-selection/stage-six-selection.module').then( m => m.StageSixSelectionPageModule)
  },  {
    path: 'stage-six-software-task-one-info',
    loadChildren: () => import('./stage-six-software-task-one-info/stage-six-software-task-one-info.module').then( m => m.StageSixSoftwareTaskOneInfoPageModule)
  },
  {
    path: 'stage-six-software-task-one-question-one',
    loadChildren: () => import('./stage-six-software-task-one-question-one/stage-six-software-task-one-question-one.module').then( m => m.StageSixSoftwareTaskOneQuestionOnePageModule)
  },
  {
    path: 'stage-six-software-task-one-question-two',
    loadChildren: () => import('./stage-six-software-task-one-question-two/stage-six-software-task-one-question-two.module').then( m => m.StageSixSoftwareTaskOneQuestionTwoPageModule)
  },
  {
    path: 'stage-six-software-task-one-question-three',
    loadChildren: () => import('./stage-six-software-task-one-question-three/stage-six-software-task-one-question-three.module').then( m => m.StageSixSoftwareTaskOneQuestionThreePageModule)
  },
  {
    path: 'stage-six-software-task-one-question-four',
    loadChildren: () => import('./stage-six-software-task-one-question-four/stage-six-software-task-one-question-four.module').then( m => m.StageSixSoftwareTaskOneQuestionFourPageModule)
  },
  {
    path: 'stage-six-software-task-two-info',
    loadChildren: () => import('./stage-six-software-task-two-info/stage-six-software-task-two-info.module').then( m => m.StageSixSoftwareTaskTwoInfoPageModule)
  },
  {
    path: 'stage-six-software-task-three-info',
    loadChildren: () => import('./stage-six-software-task-three-info/stage-six-software-task-three-info.module').then( m => m.StageSixSoftwareTaskThreeInfoPageModule)
  },
  {
    path: 'stage-six-software-task-three-question-one',
    loadChildren: () => import('./stage-six-software-task-three-question-one/stage-six-software-task-three-question-one.module').then( m => m.StageSixSoftwareTaskThreeQuestionOnePageModule)
  },
  {
    path: 'stage-six-software-task-three-question-two',
    loadChildren: () => import('./stage-six-software-task-three-question-two/stage-six-software-task-three-question-two.module').then( m => m.StageSixSoftwareTaskThreeQuestionTwoPageModule)
  },
  {
    path: 'stage-six-software-task-three-question-three',
    loadChildren: () => import('./stage-six-software-task-three-question-three/stage-six-software-task-three-question-three.module').then( m => m.StageSixSoftwareTaskThreeQuestionThreePageModule)
  },
  {
    path: 'stage-six-software-task-three-question-four',
    loadChildren: () => import('./stage-six-software-task-three-question-four/stage-six-software-task-three-question-four.module').then( m => m.StageSixSoftwareTaskThreeQuestionFourPageModule)
  },
  {
    path: 'stage-six-software-task-two-question-one',
    loadChildren: () => import('./stage-six-software-task-two-question-one/stage-six-software-task-two-question-one.module').then( m => m.StageSixSoftwareTaskTwoQuestionOnePageModule)
  },
  {
    path: 'stage-six-software-task-two-question-two',
    loadChildren: () => import('./stage-six-software-task-two-question-two/stage-six-software-task-two-question-two.module').then( m => m.StageSixSoftwareTaskTwoQuestionTwoPageModule)
  },
  {
    path: 'stage-six-software-task-two-question-three',
    loadChildren: () => import('./stage-six-software-task-two-question-three/stage-six-software-task-two-question-three.module').then( m => m.StageSixSoftwareTaskTwoQuestionThreePageModule)
  },
  {
    path: 'stage-six-software-task-two-question-four',
    loadChildren: () => import('./stage-six-software-task-two-question-four/stage-six-software-task-two-question-four.module').then( m => m.StageSixSoftwareTaskTwoQuestionFourPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
