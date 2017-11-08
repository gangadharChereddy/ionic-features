import { Component } from '@angular/core';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

   isDanger=true;
   isOutline=true;

   isDangerColor(){
     if(this.isDanger){
       this.isDanger=false;
     }
     else{
      this.isDanger=true;
     }

   }

   logEvent(event){
console.log(event);
   }

}
