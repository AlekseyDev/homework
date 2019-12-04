import { Component, OnInit } from '@angular/core';
import {CitiesContinentFilterPipe} from '../../pipes/cities-continent-filter.pipe';
import {GithubService} from '../../services/github.service';
import {IItem} from '../../dto/Interfaces';

@Component({
  selector: 'app-homework2',
  templateUrl: './app-homework2.component.html',
  styleUrls: ['./app-homework2.component.css']
})
export class AppHomework2Component implements OnInit {

  constructor(
    private citiesContinentPipe: CitiesContinentFilterPipe,
    private citiesService: GithubService
  ) { }

  public items: IItem[] = [];

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    const data = this.citiesService.getData();
    data.subscribe((data1) => {
      this.items = data1.items;
    });
  }
}
