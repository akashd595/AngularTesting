import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-demo',
  templateUrl: './array-demo.component.html',
  styleUrls: ['./array-demo.component.scss']
})
export class ArrayDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.patternPrinting();
  }

  //Array
  stringArray : string[] = ["as", "we","ba","da","l"];
  numberArray : number[] = [51,32,39,42,95];
  points : number[] = [51,32,39,42,95];
  resArray : number[] = [];
 
  arrayDemo(){

    this.points.sort(function(a, b){return b - a});
    //push--> adding data to an array
    this.points.push(86);
    console.log(this.points);

    //pop--> delete data from an array
    this.points.pop();
    console.log(this.points);

  }

  patternPrinting() {
    // *
    // **
    // ***
    // ****
    // *****
    let rowLen = 5;
    let colLen = 5;
    for(let i=1; i<=rowLen; i++){
      for(let j=1; j<=i; j++){
        console.log("*");
       
      }
      console.log();
    }


  }

}
