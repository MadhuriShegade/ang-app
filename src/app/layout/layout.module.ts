import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent  
  ]
})
export class LayoutModule {

 }
