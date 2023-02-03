import { Component, OnInit } from '@angular/core';
import studentData from '../jsonFIles/student-data.json';
@Component({
  selector: 'app-student-report-card',
  templateUrl: './student-report-card.component.html',
  styleUrls: ['./student-report-card.component.scss']
})
export class StudentReportCardComponent implements OnInit {
  // akashQuote:{quote:string, author:string}[] = quotes;
  studentMarks:{name:string, gender:string, physics:number, maths:number, english:number}[] = studentData;
  constructor() { }

  ngOnInit(): void {
    console.log("Name ",this.studentMarks[0].name);
  }

}
