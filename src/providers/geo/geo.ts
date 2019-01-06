import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as langs from 'langs';
import cities from 'cities.json';
import * as _ from 'lodash';
/*
  Generated class for the GeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeoProvider Provider');
  }

  getAllLanguages() {
    return langs.names();
  }

  getCities() {
    console.log(cities);
  }

  searchCity(searchedCity){
    return _.filter(cities, function(el) { 
                      return el.name.toLowerCase().startsWith(searchedCity.toLowerCase()); 
                    });
  }

}
