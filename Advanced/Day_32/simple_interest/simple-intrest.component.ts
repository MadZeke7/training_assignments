import { Component } from '@angular/core';

@Component({
  selector: 'simple-intrest',
  templateUrl: './simple-intrest.component.html',
  styleUrls: ['./simple-intrest.component.css']
})
export class SimpleIntrestComponent {
  principal:number = 10000;
  time:number = 2;
  rate:number = 5;
  result:number = 0;
  message:string = 'Click on calculate to get the simple intrest';
  variable:boolean = false;

  calculate(){
    this.variable = true;
    this.result = (this.principal * this.time * this.rate)/100;
    this.message = `The simple intrest calculated is ${this.result}`;
  }
}
