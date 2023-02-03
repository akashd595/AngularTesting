import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss']
})
export class EvenOddComponent implements OnInit {

  userInput:number = 0;
  result:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  checkEvenOdd() {
    this.result = "";

    let i = 0;

    while(i<10){
      if(this.userInput % 10 === i){

        this.result = "Number ends with "+i;
        return;
      }
      i++;
    }

  }
  
}
