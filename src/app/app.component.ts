import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import *as firebase from 'firebase'
import { NgZone } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public zone:NgZone) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

firebase.auth().onAuthStateChanged(user =>{
console.log(user);
if(user){
  this.zone.run((user)=>{
    this.rootPage=HomePage;
  })
}else{
  this.zone.run((user)=>{
    this.rootPage=SigninPage
  })
}
})

  }
}
