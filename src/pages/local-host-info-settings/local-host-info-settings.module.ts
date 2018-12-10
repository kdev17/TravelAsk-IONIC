import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalHostInfoSettingsPage } from './local-host-info-settings';

@NgModule({
  declarations: [
    LocalHostInfoSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalHostInfoSettingsPage),
  ],
})
export class LocalHostInfoSettingsPageModule {}
