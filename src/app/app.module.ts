import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { TutorialModule } from './tutorial/tutorial.module';
import {TechniquesModule} from './techniques/techniques.module';
import {SharingServiceService} from './sharing-service.service';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  }
]; 

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    MatIconModule,
    AppRoutingModule,
    LayoutModule,
    TutorialModule,
    TechniquesModule
  ],
  providers: [SharingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
