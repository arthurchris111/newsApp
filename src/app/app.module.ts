import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './component/news/news.component';
import { TopHeadingComponent } from './component/top-heading/top-heading.component';
import { TechNewsComponent } from './component/tech-news/tech-news.component';
import { BusinessNewsComponent } from './component/business-news/business-news.component';
import { SportsNewsComponent } from './component/sports-news/sports-news.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { hover } from './directives/hover.directive';
import { NewsStoriesComponent } from './component/news-stories/news-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    NewsComponent,
    TopHeadingComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    SportsNewsComponent,
    NavbarComponent,
    hover,
    NewsStoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
