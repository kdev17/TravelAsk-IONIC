import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoLocationPage } from './general-info-location';

@NgModule({
  declarations: [
    GeneralInfoLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoLocationPage),
  ],
})
export class GeneralInfoLocationPageModule {}
