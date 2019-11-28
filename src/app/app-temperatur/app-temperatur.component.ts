import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../../dto/Interfaces';

@Component({
  selector: 'app-temperatur',
  templateUrl: './app-temperatur.component.html',
  styleUrls: ['./app-temperatur.component.css']
})
export class AppTemperaturComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public cityItem: ICity;
}
