import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { CitiesContinentFilterPipe } from '../pipes/cities-continent-filter.pipe';
import { AppCityComponent } from './app-city/app-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesContinentFilterPipe,
    AppCityComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
