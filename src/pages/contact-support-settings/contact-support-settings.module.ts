import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSupportSettingsPage } from './contact-support-settings';

@NgModule({
  declarations: [
    ContactSupportSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactSupportSettingsPage),
  ],
})
export class ContactSupportSettingsPageModule {}
