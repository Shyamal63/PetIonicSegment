import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  puppyParam:any
  kittyParam:any
  finalPrice:any
  finalPrice1:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.puppyParam=this.navParams.get('puppyData');
    this.kittyParam=this.navParams.get('KittyData');
    console.log(this.kittyParam);
    console.log(this.puppyParam);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  buyNow(i){
  alert("buy now");

if(this.puppyParam){
  this.finalPrice=(this.puppyParam.price)+(this.puppyParam.price*18/100);
  this.puppyParam.finalPrice=this.finalPrice;
  console.log(this.puppyParam);
  this.navCtrl.push(BuyPage,{puppyParam:this.puppyParam});

}else if(this.kittyParam){
  this.finalPrice1=(this.kittyParam.price)+(this.kittyParam.price*18/100);
  console.log(this.finalPrice1);
  this.kittyParam.finalPrice1=this.finalPrice1
  console.log(this.kittyParam);
  this.navCtrl.push(BuyPage,{kittyParam:this.kittyParam});

}else{
  alert("no data found");
}  
  }
}
