import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as langs from 'langs';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * Generated class for the GeneralInfoLanguagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-languages',
  templateUrl: 'general-info-languages.html',
})
export class GeneralInfoLanguagesPage {
  private subject: Subject<string> = new Subject();
  selectedLanguages = [];
  allLanguages = [];
  founded = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController) {
      this.getAllLanguages();
      this.founded = this.allLanguages;
      this.searchLanguagesSubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoLanguagesPage');
  }

  getAllLanguages() {
    this.allLanguages = langs.names();
  }

  findLanguage(str){
    this.founded =  _.filter(this.allLanguages, function(el) { return el.toLowerCase().startsWith(str.toLowerCase()); });
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

  searchLanguagesSubscribe() {
    this.subject.pipe(debounceTime(500)).subscribe(searched =>{
            console.log(searched);
            debugger;
            this.findLanguage(searched);
          });
  }
 
  searchLanguages(searched){
    this.subject.next(searched);
  }
}
