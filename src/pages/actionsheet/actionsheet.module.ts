import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetPage } from './actionsheet';

@NgModule({
  declarations: [
    ActionSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetPage),
  ],
})
export class ActionSheetPageModule {}
