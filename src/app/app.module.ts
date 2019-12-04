import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { CitiesContinentFilterPipe } from '../pipes/cities-continent-filter.pipe';
import { AppCityComponent } from './app-homework1/app-city/app-city.component';
import { AppPopularityComponent } from './app-homework1/app-popularity/app-popularity.component';
import { AppSocialComponent } from './app-homework1/app-social/app-social.component';
import { AppHomework1Component } from './app-homework1/app-homework1.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesContinentFilterPipe,
    AppCityComponent,
    AppPopularityComponent,
    AppSocialComponent,
    AppHomework1Component
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [CitiesContinentFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
