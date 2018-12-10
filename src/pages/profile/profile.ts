import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GuideDetailPage } from '../guide-detail/guide-detail';
import { GeneralInfoSettingsPage } from '../general-info-settings/general-info-settings';
import { LocalHostInfoSettingsPage } from '../local-host-info-settings/local-host-info-settings';
import { ContactLocalInfoSettingsPage } from '../contact-local-info-settings/contact-local-info-settings';
import { NotificationSettingsPage } from '../notification-settings/notification-settings';
import { ContactSupportSettingsPage } from '../contact-support-settings/contact-support-settings';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileSettingMenu = [
    {label:'General information', page: GeneralInfoSettingsPage}, 
    {label: 'Local host information', page: LocalHostInfoSettingsPage}, 
    {label:'Contact & Identification', page: ContactLocalInfoSettingsPage}
  ];
  notificationMenu = [
    {label:'Notification settings', page: NotificationSettingsPage}
  ];
  contactSupportMenu = [
    {label:'Contacts & Support', page: ContactSupportSettingsPage}
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goToMyProfile() {
    this.navCtrl.push(GuideDetailPage, {id:'aaaa'});
  }

  goToPage(obj) {
    this.navCtrl.push(obj.page);
  }

}
