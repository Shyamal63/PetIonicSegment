import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import *as firebase from 'firebase'
import { HomePage } from '../home/home';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email:any
  password:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  isvalidEmailFormat(email){ 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
      }


  signin(){

    if(this.email == undefined || this.email == '' || this.email == null){
      alert("Email field can't be blanked");
    }else if(!this.isvalidEmailFormat(this.email)){
      alert("wrong");
    }
    
    else if(this.password == undefined || this.password == '' || this.password == null){
      alert("Password field can't be blanked");
    }
else{
  firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user =>{
    if(user){
      alert("successfully signin");
      this.navCtrl.setRoot(HomePage);
    }else{
      alert("signin failed");
    }
  })
}



  }
  register(){
    this.navCtrl.push(RegistrationPage);
  }

}
