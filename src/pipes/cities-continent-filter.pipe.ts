import { Pipe, PipeTransform } from '@angular/core';
import {ICity} from '../dto/Interfaces';

@Pipe({
  name: 'citiesContinentPipe',
  pure: false
})
export class CitiesContinentFilterPipe implements PipeTransform {
  transform(cities: ICity[], continent: string): ICity[] {
    if (!cities || !continent) {
      return cities;
    }
    return cities.filter(item => item.cityInfo.continent === continent);
  }
}
