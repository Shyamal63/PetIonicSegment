import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import *as firebase from 'firebase'

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
  puppyParam:any
  kittyParam:any
  totalPrice:any
  currentUser:any
  kittyData:any
  puppyData:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {

this.currentUser=firebase.auth().currentUser
const puppyRef=firebase.database().ref(`/pets/` + `/puppies`);
puppyRef.on('value',snapPuppy=>{
console.log(snapPuppy.val());
this.puppyData=[]
this.puppyData=snapPuppy.val();
console.log(this.puppyData);
})

const kittyRef=firebase.database().ref(`/pets/` + `/kittens`);
kittyRef.on('value',snapkitty=>{
console.log(snapkitty.val());
this.kittyData=[]
this.kittyData=snapkitty.val();
console.log(this.kittyData.petId);
})

this.puppyParam=this.navParams.get('puppyParam');
this.kittyParam=this.navParams.get('kittyParam');
console.log(this.puppyParam);
console.log(this.kittyParam);
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad BuyPage');
  }
  payNow(i){
    console.log(i);
    if(this.puppyParam){
      firebase.database().ref(`/userData/` +this.currentUser.uid + `/buy/`).push(this.puppyParam);
      if(this.puppyParam.petId == this.puppyData[i].petId){
        firebase.database().ref(`/pets/` + `/puppies/` + this.puppyParam.petId ).remove();
        this.navCtrl.push(HomePage);
      }else{
        alert("have not matched");
      }
      // firebase.database().ref(`pets` +)
    }else if(this.kittyParam){
      firebase.database().ref(`/userData/` +this.currentUser.uid + `/buy/`).push(this.kittyParam);
      this.navCtrl.push(HomePage);
    }
  }

}
