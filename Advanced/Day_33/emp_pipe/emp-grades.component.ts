import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-grades',
  templateUrl: './emp-grades.component.html',
  styleUrls: ['./emp-grades.component.css']
})

export class EmpGradesComponent {
  employees : any[] = [
    {index: 1, name: "Robbo", salary: 100000, grades: 4},
    {index: 2, name: "Hendo", salary: 200000, grades: 2},
    {index: 3, name: "James", salary:5000, grades: 3},
    {index: 4, name: "Ankeet", salary: 40000, grades: 1},
    {index: 5, name: "N'golo", salary: 30000, grades: 2},
    {index: 6, name: "Thongire", salary: 50000, grades: 3},
  ]
}
