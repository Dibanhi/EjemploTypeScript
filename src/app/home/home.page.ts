import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  VariableCualquiera: string;
  Cosa0: string;
  Cosa1: string;
  Cosa2: string;
  Cosa3: string;   
  /*
    alert("xd")
    console.log("xd");
   */
  uwu(){
    alert("Ingrese1:" + this.VariableCualquiera + "\nIngrese2: " + this.Cosa0 + 
    "\nIngrese3:"+ this.Cosa1 + "\nIngrese4: " + this.Cosa2 + "\nIngrese5: " + this.Cosa3);
  }
  
  constructor() {}
  

}
