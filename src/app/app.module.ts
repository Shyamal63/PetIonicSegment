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
import *as firebase from 'firebase'
import { DetailsPageModule } from '../pages/details/details.module';
import { DetailsPage } from '../pages/details/details';
import { SigninPageModule } from '../pages/signin/signin.module';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { SigninPage } from '../pages/signin/signin';
import { RegistrationPage } from '../pages/registration/registration';
import { FormsModule }    from '@angular/forms';
import { BuyPageModule } from '../pages/buy/buy.module';
import { BuyPage } from '../pages/buy/buy';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHHHsyMD02AW6ly9tlnpaQJfjt6lwyc54",
    authDomain: "holidayhome-5de1b.firebaseapp.com",
    databaseURL: "https://holidayhome-5de1b.firebaseio.com",
    projectId: "holidayhome-5de1b",
    storageBucket: "",
    messagingSenderId: "418509918805"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    DetailsPageModule,
    SigninPageModule,
    FormsModule,
    BuyPageModule,
    RegistrationPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage,
    SigninPage,
    RegistrationPage,
    BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
