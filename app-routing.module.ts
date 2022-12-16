import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashComponent } from './dash/dash.component';
import { DestinationComponent } from './destination/destination.component';
import { LogComponent } from './log/log.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'dash', pathMatch: 'full'
  },
  {
    path: 'dash', component: DashComponent
  },
  {
    path: 'log', component: LogComponent
  },

  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'destination', component: DestinationComponent
  },
  {
    path:'contact',component:ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
