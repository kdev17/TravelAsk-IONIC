import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoSettingsPage } from './general-info-settings';

@NgModule({
  declarations: [
    GeneralInfoSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoSettingsPage),
  ],
})
export class GeneralInfoSettingsPageModule {}
