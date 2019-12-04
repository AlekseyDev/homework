import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../../../dto/Interfaces';

@Component({
  selector: 'app-city',
  templateUrl: './app-city.component.html',
  styleUrls: ['./app-city.component.css']
})
export class AppCityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public cityItem: ICity;
}
