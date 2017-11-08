import { CardPage } from './../card/card';
import { ButtonPage } from './../button/button';
import { BadgePage } from './../badge/badge';
import { AlertPage } from './../alert/alert';
import { ActionSheetPage } from './../actionsheet/actionsheet';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actionSheetPage:any;
  alertPage:any;
  badgePage :any;
  buttonPage :any;
  cardPage:any;

  constructor(public navCtrl: NavController) {
    this.actionSheetPage=ActionSheetPage;
    this.alertPage=AlertPage;
    this.badgePage=BadgePage;
    this.buttonPage=ButtonPage;
    this.cardPage=CardPage;
  }

}
