import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { GuideDetailPageModule } from '../pages/guide-detail/guide-detail.module';
import { ChatPage } from '../pages/chat/chat';
import { CreateTripPage } from '../pages/create-trip/create-trip';
import { OffertPage } from '../pages/offert/offert';
import { SendOffertModalPage } from '../pages/send-offert-modal/send-offert-modal';
import { AcceptOfferPage } from '../pages/accept-offer/accept-offer';
import { ChatPageModule } from '../pages/chat/chat.module';
import { ChatListPageModule } from '../pages/chat-list/chat-list.module';
import { GeneralInfoSettingsPageModule } from '../pages/general-info-settings/general-info-settings.module';
import { LocalHostInfoSettingsPageModule } from '../pages/local-host-info-settings/local-host-info-settings.module';
import { ContactLocalInfoSettingsPageModule } from '../pages/contact-local-info-settings/contact-local-info-settings.module';
import { NotificationSettingsPageModule } from '../pages/notification-settings/notification-settings.module';
import { ContactSupportSettingsPageModule } from '../pages/contact-support-settings/contact-support-settings.module';
import { GeneralInfoNamePageModule } from '../pages/general-info-name/general-info-name.module';
import { GeneralInfoAboutMePageModule } from '../pages/general-info-about-me/general-info-about-me.module';
import { GeneralInfoLocationPageModule } from '../pages/general-info-location/general-info-location.module';
import { GeneralInfoLanguagesPageModule } from '../pages/general-info-languages/general-info-languages.module';
import { GeneralInfoProfilePhotosPageModule } from '../pages/general-info-profile-photos/general-info-profile-photos.module';
import { GeneralProvider } from '../providers/general/general';
import { GeoProvider } from '../providers/geo/geo';
import { UtilsProvider } from '../providers/utils/utils';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    ChatPage,
    CreateTripPage,
    OffertPage,
    SendOffertModalPage,
    AcceptOfferPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GuideDetailPageModule,
    ChatListPageModule,
    GeneralInfoSettingsPageModule,
    LocalHostInfoSettingsPageModule,
    ContactLocalInfoSettingsPageModule,
    NotificationSettingsPageModule,
    ContactSupportSettingsPageModule,
    GeneralInfoNamePageModule,
    GeneralInfoAboutMePageModule,
    GeneralInfoLocationPageModule,
    GeneralInfoLanguagesPageModule,
    GeneralInfoProfilePhotosPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    ChatPage,
    CreateTripPage,
    OffertPage,
    SendOffertModalPage,
    AcceptOfferPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeneralProvider,
    GeoProvider,
    UtilsProvider
  ]
})
export class AppModule {}
