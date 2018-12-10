import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactLocalInfoSettingsPage } from './contact-local-info-settings';

@NgModule({
  declarations: [
    ContactLocalInfoSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactLocalInfoSettingsPage),
  ],
})
export class ContactLocalInfoSettingsPageModule {}
