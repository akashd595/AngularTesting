import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quoteModel';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.scss']
})
export class QuoteGeneratorComponent implements OnInit {
  quotes:QuoteModel[] = [
    {
      quote:"True terror is to wake up one morning and discover that your high school class is running the country.",
      person:"Kurt Vonnegut"
    },
    {
      quote:"Always forgive your enemies; nothing annoys them so much",
      person:"Oscar Wilde"
    },
    {
      quote:"Never go to bed mad. Stay up and fight.",
      person:"Phyllis Diller"
    },
    {
      quote:"If you cant be kind, at least be vague.",
      person:"Judith Martin"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  showQuote:any="";
  showPerson:any="";
  changeQuote(){

    let randNumber = Math.random() * this.quotes.length;
    randNumber = Math.floor(randNumber);
    this.showQuote = this.quotes[randNumber].quote;
    this.showPerson = this.quotes[randNumber].person;

  }
}
