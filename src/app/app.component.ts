import {Component} from '@angular/core';
import {ICity} from '../dto/Interfaces';
import { cities } from '../mock/cities';
import {init} from 'protractor/built/launcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework';
  public cities: ICity[] = cities;
}
