import { Component, OnInit } from '@angular/core';
import {CitiesContinentFilterPipe} from '../../pipes/cities-continent-filter.pipe';
import {ICity} from '../../dto/Interfaces';
import {cities} from '../../mock/cities';

@Component({
  selector: 'app-homework1',
  templateUrl: './app-homework1.component.html',
  styleUrls: ['./app-homework1.component.css']
})
export class AppHomework1Component implements OnInit {

  constructor(
    private citiesContinentPipe: CitiesContinentFilterPipe
  ) { }

  public cities: ICity[] = cities;
  public selectedContinent: string;
  public selectedCity: ICity;
  public continents: Array<string>;
  /* с выбором конкретного континента, подчеркнем его, добавив соответствующий стиль */
  public classSelectedA = 'selectedAUnderline';

  ngOnInit() {
    if (cities !== null && cities !== undefined) {
      // достанем уникальные наименования из поля cityInfo.continent
      this.continents = [...new Set(cities.map(item => item.cityInfo.continent))];

      if (cities.length > 0) {
        this.selectedCity = cities[0];
      }
    }
  }

  public setSelected(continent: string) {
    this.selectedContinent = continent;
    const res = this.getFirstElementByFilter(this.selectedContinent);
    if (res !== null) {
      this.selectedCity = res;
    }
  }

  private getFirstElementByFilter(continent) : ICity {
    const findItems = this.citiesContinentPipe.transform(this.cities, continent);
    if (findItems !== null && findItems !== undefined && findItems.length > 0) {
      return findItems[0];
    }
    return null;
  }

  public getSelectedAClass(continent: string): string {
    if (this.selectedContinent !== null) {
      if (continent === this.selectedContinent) {
        return this.classSelectedA;
      }
    }
    return '';
  }

  public setSelectedCity(city: ICity) {
    this.selectedCity = city;
  }
}
