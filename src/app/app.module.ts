import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CitiesContinentFilterPipe } from '../pipes/cities-continent-filter.pipe';
import { AppCityComponent } from './app-homework1/app-city/app-city.component';
import { AppPopularityComponent } from './app-homework1/app-popularity/app-popularity.component';
import { AppSocialComponent } from './app-homework1/app-social/app-social.component';
import { AppHomework1Component } from './app-homework1/app-homework1.component';
import { AppHomework2Component } from './app-homework2/app-homework2.component';
import {GithubService} from '../services/github.service';
import {InterceptorService} from '../services/interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CitiesContinentFilterPipe,
    AppCityComponent,
    AppPopularityComponent,
    AppSocialComponent,
    AppHomework1Component,
    AppHomework2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    CitiesContinentFilterPipe,
    GithubService,
    {
      provide: 'BASE_URL',
      useValue: 'https://api.github.com/search/repositories'
      /*useValue: 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc'*/
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
