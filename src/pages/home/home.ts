import { ActionSheetPage } from './../actionsheet/actionsheet';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actionSheetPage:any;

  constructor(public navCtrl: NavController) {
    this.actionSheetPage=ActionSheetPage;
  }

}
