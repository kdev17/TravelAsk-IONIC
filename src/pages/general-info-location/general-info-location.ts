import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GeoProvider } from '../../providers/geo/geo';
import _ from 'lodash';
/**
 * Generated class for the GeneralInfoLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-location',
  templateUrl: 'general-info-location.html',
})
export class GeneralInfoLocationPage {
  private subject: Subject<string> = new Subject();
  private currentLocation;
  private locationSearched = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private geoService: GeoProvider) {
    this.searchLocationSubscribe();
    this.currentLocation = {
      country: "AD",
      lat: "42.46372",
      lng: "1.49129",
      name: "Sant Julià de Lòria"
    }
    this.geoService.getCities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoLocationPage');
  }

  saveLocation(item) {
    this.currentLocation = item;
    console.log(this.currentLocation);
    this.dismiss();
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

  searchLocationSubscribe() {
    this.subject.pipe(debounceTime(500)).subscribe(searched => {
      this.locationSearched =  _.slice(this.geoService.searchCity(searched), 0, 20);
    });
  }

  searchLocation(searched) {
    console.log('next:', searched);
    this.subject.next(searched);
  }
}
