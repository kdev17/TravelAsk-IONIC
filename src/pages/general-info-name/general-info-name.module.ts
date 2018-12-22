import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoNamePage } from './general-info-name';

@NgModule({
  declarations: [
    GeneralInfoNamePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoNamePage),
  ],
})
export class GeneralInfoNamePageModule {}
