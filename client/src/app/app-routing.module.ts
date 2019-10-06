import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from "./shared/layout/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {SiteLayoutComponent} from "./shared/layout/site-layout/site-layout.component";
import {OverviewPageComponent} from "./pages/overview-page/overview-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {CitiesPageComponent} from "./pages/cities-page/cities-page.component";
import {UpdatePageComponent} from "./pages/update-page/update-page.component";
import {OurteamComponent} from "./pages/ourteam/ourteam.component";
import {TrainingComponent} from "./pages/training/training.component";
import {UpdateTeamComponent} from "./pages/update-team/update-team.component";


const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]},
  {path: '', component: SiteLayoutComponent, /*canActivate: [AuthGuard],*/ children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'cities', component: CitiesPageComponent},
      {path: 'cities-update', component: UpdatePageComponent},
      {path: 'update', component: UpdatePageComponent},
      {path: 'ourteam', component: OurteamComponent},
      {path: 'team-update', component: UpdateTeamComponent},
      {path: 'overview', component: OverviewPageComponent},
      {path: 'training', component: TrainingComponent},
      {path: 'add', component: CitiesPageComponent},
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
