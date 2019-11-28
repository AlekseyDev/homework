import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../../dto/Interfaces';

@Component({
  selector: 'app-popularity',
  templateUrl: './app-popularity.component.html',
  styleUrls: ['./app-popularity.component.css']
})
export class AppPopularityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public cityItem: ICity;
}
