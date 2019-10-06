import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GoogleChartsModule} from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { TrainingComponent } from './pages/training/training.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UpdateTeamComponent } from './pages/update-team/update-team.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    PostsPageComponent,
    CitiesPageComponent,
    UpdatePageComponent,
    OurteamComponent,
    TrainingComponent,
    AboutComponent,
    ContactComponent,
    UpdateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleChartsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
