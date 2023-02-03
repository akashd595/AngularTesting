import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.scss']
})
export class PrimeNumberComponent implements OnInit {

checkNumber: number = 0;
flag:number = 0;
result:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  checkPrime() {
    this.flag = 0;
    this.result = "";
    for( let i=2; i<this.checkNumber/2; i++ ){
      if( this.checkNumber % i === 0 ){
        console.log(i);
        console.log(this.checkNumber);
        this.flag = 1;
        this.checkPrimeCallBack();
        return;
      }
      console.log("index", i);
    }
    this.checkPrimeCallBack();
    
  }
  checkPrimeCallBack(){
    console.log("inside checkPrimeCallBack");
    console.log(this.flag);
    if( this.flag === 1 ){
      this.result = this.checkNumber+" is not a Prime Number";      
    }else{
      this.result = this.checkNumber+" is Prime Number";      
    }
  }
}
