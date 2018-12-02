import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,  } from '@angular/forms';
import * as moment from 'moment';
/**
 * Generated class for the CreateTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-trip',
  templateUrl: 'create-trip.html',
})
export class CreateTripPage {

  maxDateTrip = moment().add(1, 'y').toDate();
  todo = {}
  // public navCtrl: NavController, public navParams: NavParams, 
  constructor(private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      destinationTravel: [''],
      fromDate: [''],
      toDate: [''],
      howManyPeople: [''],
      shareWithTravelers: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTripPage');
  }
logForm() {
    console.log(this.todo)
  }
}
