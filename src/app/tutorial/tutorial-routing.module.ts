import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {TutorialComponent} from './tutorial.component';

const routes: Routes = [
  {
    path: 'tutorial',
    component: MainLayoutComponent,
    children: [
      { path: '', component: TutorialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
