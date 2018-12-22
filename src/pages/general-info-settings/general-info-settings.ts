import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GeneralInfoNamePage } from '../general-info-name/general-info-name';
import { GeneralInfoLocationPage } from '../general-info-location/general-info-location';
import { GeneralInfoLanguagesPage } from '../general-info-languages/general-info-languages';
import { GeneralInfoProfilePhotosPage } from '../general-info-profile-photos/general-info-profile-photos';
import { GeneralInfoAboutMePage } from '../general-info-about-me/general-info-about-me';

/**
 * Generated class for the GeneralInfoSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-settings',
  templateUrl: 'general-info-settings.html',
})
export class GeneralInfoSettingsPage {

  generalInfoPage = [
    {label:'Name', page: GeneralInfoNamePage}, 
    {label: 'Location', page: GeneralInfoLocationPage}, 
    {label:'Languages', page: GeneralInfoLanguagesPage},
    {label:'Profile photos', page: GeneralInfoProfilePhotosPage},
    {label:'About me', page: GeneralInfoAboutMePage},
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoSettingsPage');
  }

  goToPage(obj) {
    this.navCtrl.push(obj.page);
  }

  openModal(obj) {
    const modal = this.modalCtrl.create(obj.page);
    modal.onDidDismiss(data => {
      /* if(data) {
        this.alertCtrl.create({
          title: 'Offert has been sent',
          subTitle: data.msg,
          cssClass: 'alertPopup',
          buttons: ['Ok'],
        }).present();
      } */
    });
    modal.present();
  }

}
