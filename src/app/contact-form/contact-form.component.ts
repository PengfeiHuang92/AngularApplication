import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  isNum = false; 
  phoneNumber : any;
  submit(x:any){console.log(x);}

  //Setting isNum to True when cardNumber contains only numbers, otherwise false.
  isDigits(cardNumber:any){
    this.isNum = /^\d+$/.test(cardNumber); 
  }
  
}
