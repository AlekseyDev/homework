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

  constructor(private citiesContinentPipe: CitiesContinentFilterPipe
  ) {}

  public cities: ICity[] = cities;
  public selectedContinent: string;
  public selectedCity: ICity;
  public continents: Array<string>;
  /* с выбором конкретного континента, подчеркнем его, добавив соответствующий стиль */
  public classSelectedA = 'selectedAUnderline';

  ngOnInit(): void {
    if (cities !== null && cities !== undefined) {
      // достанем уникальные наименования из поля cityInfo.continent
      this.continents = [...new Set(cities.map(item => item.cityInfo.continent))];
    }
  }

  public setSelected(continent: string) {
    this.selectedContinent = continent;
    const findItems = this.citiesContinentPipe.transform(this.cities, this.selectedContinent);
    if (findItems !== null && findItems !== undefined && findItems.length > 0) {
      this.selectedCity = findItems[0];
    }
  }

  public getSelectedAClass(continent: string): string {
    if (this.selectedContinent !== null) {
      if (continent === this.selectedContinent) {
        return this.classSelectedA;
      }
    }
    return '';
  }
}

