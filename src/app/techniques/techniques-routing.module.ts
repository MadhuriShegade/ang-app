import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {TechniquesComponent} from './techniques/techniques.component';

const routes: Routes = [
  {
    path: 'techniques',
    component: MainLayoutComponent,
    children: [
    { path: '', component: TechniquesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniquesRoutingModule { }
