import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoAboutMePage } from './general-info-about-me';

@NgModule({
  declarations: [
    GeneralInfoAboutMePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoAboutMePage),
  ],
})
export class GeneralInfoAboutMePageModule {}
