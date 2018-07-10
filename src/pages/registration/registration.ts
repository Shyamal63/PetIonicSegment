import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase'
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  name:any
  email:any
  password:any
  phoneNo:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


  isvalidEmailFormat(email){ 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
      }


  registration(){
    if(this.email == undefined || this.email == '' || this.email == null){
      alert("Email field can't be blanked");
    }else if(!this.isvalidEmailFormat(this.email)){
      alert("wrong");
    }
    
    else if(this.password == undefined || this.password == '' || this.password == null){
      alert("Password field can't be blanked");
    }
    else{

      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user =>{
        console.log(user);
        firebase.database().ref('userData').child(user.uid).set({
          name:this.name,
          email:this.email,
          phoneNo:this.password
        })
        // if(user){
        //   this.navCtrl.push(SigninPage);
        // }
      })

    }

    
  }

}
