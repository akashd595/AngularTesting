import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-programs',
  templateUrl: './testing-programs.component.html',
  styleUrls: ['./testing-programs.component.scss']
})
export class TestingProgramsComponent implements OnInit {

  num:number = 0;
  resultArray:number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  factorsOfNumber(){
    this.resultArray=[];
    let i = 2;
    let counter = 0;
    while(this.num > 1){
      console.log(++counter);
      if(this.num % i === 0){
        this.resultArray.push(i);
        this.num = this.num / i;
      }else{
        i++;
      }
      for(let i=0;i<this.resultArray.length;i++){

      }
    }





    console.log(this.resultArray);
  }

}
