import { SportsNewsComponent } from './component/sports-news/sports-news.component';
import { TechNewsComponent } from './component/tech-news/tech-news.component';
import { TopHeadingComponent } from './component/top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { NewsComponent } from './component/news/news.component';
import { BusinessNewsComponent } from './component/business-news/business-news.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent, data: { state: '' }},
  { path:'login', component: LoginFormComponent,data: { state: 'login' }},
  { path: 'signup', component: RegistrationFormComponent, data: { state: 'signup'}},
  { path:'news', component:NewsComponent, data: { state: 'news' }},
  { path: 'topHeading', component:TopHeadingComponent, data: { state: 'topHeading'}},
  { path:'tech', component:TechNewsComponent, data: { state: 'tech'}},
  { path:'business', component:BusinessNewsComponent, data: { state: 'business'}},
  { path: 'sports', component:SportsNewsComponent, data: { state: 'sports'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
