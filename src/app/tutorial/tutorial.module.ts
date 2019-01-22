import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  declarations: [TutorialComponent]
})
export class TutorialModule { }
