import {Component, Input, OnInit} from '@angular/core';
import { ISocialInfo} from '../../../dto/Interfaces';

@Component({
  selector: 'app-social',
  templateUrl: './app-social.component.html',
  styleUrls: ['./app-social.component.css']
})
export class AppSocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public socialItem: ISocialInfo;
}
