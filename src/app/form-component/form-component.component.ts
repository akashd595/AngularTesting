import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  userData:any = {};    //object
  constructor() { }

  ngOnInit(): void {        //starting point 
    
  }

  getData(userInput: any) {
    this.userData = userInput;
    console.log(this.userData);
    }

    public isCollapsed = false;
}
