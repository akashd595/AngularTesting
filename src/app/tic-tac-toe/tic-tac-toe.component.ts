import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  gameBoard:Array<string>=["a","b","c","d","e","f","g","h","i"];

  constructor() { }

  ngOnInit(): void {

  }
  gameRoundFunc(){

  }
}
