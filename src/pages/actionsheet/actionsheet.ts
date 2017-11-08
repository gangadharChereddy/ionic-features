import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionSheetPage {



  constructor(private actionSheetCtrl: ActionSheetController ) {
  }

  onPresentActionSheet(){
    let actionSheet=this.actionSheetCtrl.create({

    title : 'Title of ActionSheet',
    //subTitle : 'SubTitle of ActionSheet',
    enableBackdropDismiss : false,
  //  enableBackdropDismiss : true,
    buttons :[
      {
        text: 'Btn without role',
        handler:()=>{
          console.log("button without role clicked")
        }
      },
      {
        text:'Btn destructive role',
        role: 'destructive',
        handler :()=>{
          console.log("destructive clicked");
        }
      },
      {
        text :'Btn cancel role',
        role : 'cancel',
        handler :()=>{
          console.log("cancel clicked");
        }
      },
      {
        text: 'Btn with icon',
        icon:'home',
        handler:()=>{
          console.log(" home button clicked");
        }
      }
    ]
    })
    actionSheet.present();
  }
}
