import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import *as firebase from 'firebase'
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pet:any
petType:any
puppies:any
kittens:any


  constructor(public navCtrl: NavController) {
    this.petType=[
      "puppies",
      "kittens"
      
    ]
//     this.puppies=[
//        {name:'Ruby',age:1,image:'assets/imgs/puppy2.jpg',price:4000,petId:7845},
//        {name:'Jack',age:2,image:'assets/imgs/puppy3.jpg',price:5000,petId:9856},
//        {name:'Rocky',age:3,image:'assets/imgs/puppy4.jpg',price:6000,petId:3526}
//     ]

// this.kittens=[
//   {name:'Sofia',age:1,image:'assets/imgs/kitten1.jpg',price:7000,petId:2323},
//   {name:'Volu',age:2,image:'assets/imgs/kitten2.jpg',price:2000,petId:1245},
//   {name:'Dholu',age:3,image:'assets/imgs/kitten3.jpg',price:8000,petId:3252},
//   {name:'Surdas',age:3,image:'assets/imgs/kitten4.jpg',price:3000,petId:4512}

//]

const puppyRef=firebase.database().ref(`/pets/` + `/puppies`)
puppyRef.on('value',snapPuppy =>{
  console.log(snapPuppy.val());
  this.puppies=snapPuppy.val() 
})
const kittyyRef=firebase.database().ref(`/pets/` + `/kittens`)
kittyyRef.on('value',snapKittens =>{
  console.log(snapKittens.val());
  this.kittens=snapKittens.val() 
})
    this.pet=this.petType[0];
  }
  puppyClick(i){
    console.log(i);
    console.log(this.puppies[i]);
    this.navCtrl.push(DetailsPage,{puppyData:this.puppies[i]});
  }
  kittyClick(i){
    console.log(i);
    console.log(this.kittens[i]);
  this.navCtrl.push(DetailsPage,{KittyData:this.kittens[i]});
  }
  signOut(){
    firebase.auth().signOut();
  }
  // submitData(){
  //   firebase.database().ref('pets').set({
  //     puppies:this.puppies,
  //     kittens:this.kittens
  //   })
  // }
}
