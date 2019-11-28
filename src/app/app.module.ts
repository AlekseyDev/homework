import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { CitiesContinentFilterPipe } from '../pipes/cities-continent-filter.pipe';
import { AppCityComponent } from './app-city/app-city.component';
import { AppTemperaturComponent } from './app-temperatur/app-temperatur.component';
import { AppSocialComponent } from './app-social/app-social.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesContinentFilterPipe,
    AppCityComponent,
    AppTemperaturComponent,
    AppSocialComponent
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
