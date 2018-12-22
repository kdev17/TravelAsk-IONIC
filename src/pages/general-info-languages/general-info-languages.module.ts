import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoLanguagesPage } from './general-info-languages';

@NgModule({
  declarations: [
    GeneralInfoLanguagesPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoLanguagesPage),
  ],
})
export class GeneralInfoLanguagesPageModule {}
