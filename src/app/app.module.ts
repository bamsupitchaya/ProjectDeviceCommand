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
import { AddDevicesPage } from '../pages/add-devices/add-devices';
import { CommandPage } from '../pages/command/command';
import { RegisterPage } from '../pages/register/register';
import { StatusDevicesPage } from '../pages/status-devices/status-devices';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AuthSystemProvider } from '../providers/auth-system/auth-system';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddDevicesPage,
    CommandPage,
    RegisterPage,
    StatusDevicesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddDevicesPage,
    CommandPage,
    RegisterPage,
    StatusDevicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthSystemProvider
  ]
})
export class AppModule {}
