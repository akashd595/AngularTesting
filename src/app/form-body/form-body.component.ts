import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.scss']
})
export class FormBodyComponent implements OnInit {

  fiboLimit:number = 0;
  fiboSeries:Array<number>=[];
  sumOfFibonacci:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  generateFibonacciSeries(){
    if(this.fiboSeries != null){
      this.fiboSeries.length = 0;
    }
    this.fiboSeries.push(0);
    this.fiboSeries.push(1);
    let firstNum = 0;
    let secondNum = 1;
    let thirdNum = 0;
    this.sumOfFibonacci = 1;
    console.log("fibolength ",this.fiboLimit);
    
    for(let i=0; i<this.fiboLimit-2; i++){
      thirdNum = firstNum + secondNum;
      this.fiboSeries.push(thirdNum);
      firstNum = secondNum;
      secondNum = thirdNum;
      this.sumOfFibonacci += thirdNum;
    }
    console.log(this.fiboSeries);
  }

  exampleOfForLoop(){
    for(let i = 1; i < 5; i++) {
      console.log(i*i);
    }
  }

}
