import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  constructor(private httpObj:HttpClient){}

  customersArray:any[] = [];

  getData():void {
    let url :string  = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        this.customersArray = response.data;
        console.log(this.customersArray)
    });
  }
}
