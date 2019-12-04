import {Component, OnInit} from '@angular/core';
import {ICity} from '../dto/Interfaces';
import { cities } from '../mock/cities';
import {CitiesContinentFilterPipe} from '../pipes/cities-continent-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homework';

  constructor() {}

  ngOnInit(): void {
  }
}

