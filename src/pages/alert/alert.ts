import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';



@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl:AlertController){}
  onPresentBasicAlertWithoutButton(){
    let basicAlert1=this.alertCtrl.create({
      title : 'Alert without Button',
      subTitle : 'Its subtitle of alert...!!!',
      message : 'In this alert enableBackdropDismiss prop set to true and used to notify the user about new information' ,
   // enableBackdropDismiss :false
      enableBackdropDismiss :true

    });
    basicAlert1.present();
  }

  onPresentBasicAlertWithButton(){
    let basicAlert2=this.alertCtrl.create({
      title : 'Alert with Button',
      subTitle : 'Its subtitle of alert...!!!',
      message : 'In this alert enableBackdropDismiss prop set to false, used to notify the user about new information' ,
  //  enableBackdropDismiss :true,
      enableBackdropDismiss :false,
      buttons :[
        {
          text:'ok',
          handler:()=>{
            console.log("ok clicked");
          }
        }
      ]


    });
    basicAlert2.present();
  }

  onPresentPromptAlert(){
    let promptAlert=this.alertCtrl.create({
      title : 'Promt Alert',
      subTitle : 'Used to input data or information',
      message : 'For example, to ask the user for a password before moving forward in an application’s flow or for login',
      inputs : [
        {
          type :'email',
          name : 'username',
          placeholder : 'Email',
        //  value : 'abc@example.com'
        //  id : 'username'
        },
        {
          type :'password',
          name : 'password',
          placeholder : 'Password',
        //  id : 'username'
        }
      ],
      buttons :[
        {
          text : 'Cancel',
          role :'cancel',
          handler : ()=>{
            console.log('cancel clicked');
          }
        },
        {
          text : 'Login',
          handler : (data)=>{
            console.log(data.username);
            console.log(data.password);
          }
        }
      ]
    });
    promptAlert.present();
  }

  onPresentConfirmAlert(){
    let confirmAlert=this.alertCtrl.create({
      title : 'Confirm Alert',
      subTitle : 'Used for users confirmation',
      message : 'To confirm the user while performing certain important actions and it doesnt contain any input info',
      buttons : [
        {
          text : 'Cancel',
          role : 'cancel',
          handler : ()=>{
            console.log('cancel clicked');
          }
        },
        {
          text : 'Confirm',
          handler : ()=>{
            console.log('confirm clicked');
          }
        }
      ]
    });
    confirmAlert.present();
  }

  onPresentRadioAlert(){
    let radioAlert=this.alertCtrl.create({
      title : 'Radio Alert',
      message: 'A set of options is provided to the user, but only one option can be chosen.',
      inputs : [
        {
          type : 'radio',
          label: 'Blue',
          value : '0',
          checked :true
        },
        {
          type : 'radio',
          label: 'Red',
          value : '-1',
         
        },
        {
          type : 'radio',
          label: 'Green',
          value : '1'
        }
      ],
      buttons :[
        {
          text : 'Cancel',
          role :'cancel',
          handler :()=>{
            console.log('cancel clicked');
          }
        },
        {
          text : 'Ok',
          handler :(data)=>{
            console.log(data);
          }
        }
      ]
    });
    radioAlert.present();
  }

  onPresentCheckboxAlert(){
    let checkboxAlert=this.alertCtrl.create({
      title : 'Checkbox Alert',
      message: 'A set of options is provided to the user, but multiple options can be chosen.',
      inputs : [
        {
          type : 'checkbox',
          label: 'Blue',
          value : '0',
          checked :true
        },
        {
          type : 'checkbox',
          label: 'Red',
          value : '-1',
         
        },
        {
          type : 'checkbox',
          label: 'Green',
          value : '1'
        }
      ],
      buttons :[
        {
          text : 'Cancel',
          role :'cancel',
          handler :()=>{
            console.log('cancel clicked');
          }
        },
        {
          text : 'Ok',
          handler :(data)=>{
            console.log(data);
          }
        }
      ]
    });
    checkboxAlert.present();
  }


}
