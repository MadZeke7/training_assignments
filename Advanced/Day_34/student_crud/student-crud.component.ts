import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})

export class StudentCrudComponent {
  ename:string  = "";
  location:string  = "";
  empNo:number = 0;
  deptNo:number = 0;
  sal:number = 0;

  public employees:any[]=  [];
  
  constructor(private httpObj:HttpClient) { }

  getData():void{
    let url :string  = "http://localhost:3000/employees";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
       // console.log(response);
        this.employees = response;
    });
  }

  addData():void
  {    
    let url :string  = "http://localhost:3000/employees";

    let empObj:any =  {};
    empObj.ename = this.ename;
    empObj.location = this.location;
    empObj.deptNo = this.deptNo;
    empObj.sal = this.sal;


    this.httpObj.post(url, empObj).subscribe(  (response:any)  =>  {
      alert("New Student details are saved in server");
      this.getData();
    });
  }

  deleteData(empNo:number):void{
    let url :string  = "http://localhost:3000/employees/" + empNo;
    this.httpObj.delete(url).subscribe(  (data)  =>  {
    });
    this.getData();
  }

}
