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
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
