import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileSettingMenu = ['General information', 'Local host information', 'Contact & Identification'];
  notificationMenu = ['Notification settings'];
  contactSupportMenu = ['Contacts & Support'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
