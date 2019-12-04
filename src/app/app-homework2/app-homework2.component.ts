import { Component, OnInit } from '@angular/core';
import {CitiesContinentFilterPipe} from '../../pipes/cities-continent-filter.pipe';
import {GithubService} from '../../services/github.service';
import {IItem} from '../../dto/Interfaces';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-homework2',
  templateUrl: './app-homework2.component.html',
  styleUrls: ['./app-homework2.component.css']
})
export class AppHomework2Component implements OnInit {

  public term: string;

  constructor(
    private citiesContinentPipe: CitiesContinentFilterPipe,
    private gitHubService: GithubService
  ) { }

  public items: IItem[] = [];

  ngOnInit() {
  }

  public btnSearchData(): void {
    this.items = null;
    if (this.term !== '') {
      const data = this.gitHubService.getData(this.term);
      data.subscribe((data1) => {
        this.items = data1.items;
      });
    }
  }
}
