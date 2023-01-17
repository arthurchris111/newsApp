import { TopHeadingComponent } from './component/top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { NewsComponent } from './component/news/news.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path:'login', component: LoginFormComponent},
  { path: 'signup', component: RegistrationFormComponent },
  { path:'news', component:NewsComponent},
  { path: 'topHeading', component:TopHeadingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
