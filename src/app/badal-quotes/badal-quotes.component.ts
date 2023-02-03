import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quoteModel';
import countries from '../jsonFIles/countries.json';
import quotes from '../jsonFIles/quotes-author.json';

@Component({
  selector: 'app-badal-quotes',
  templateUrl: './badal-quotes.component.html',
  styleUrls: ['./badal-quotes.component.scss']
})
export class BadalQuotesComponent implements OnInit {
  countryList:{name:string, code:string}[] = countries;
  akashQuote:{quote:string, author:string}[] = quotes;
  badalQuote:QuoteModel[] = [
    {
      quote:"There is no such thing as fun for the whole family.",
      person:"Jerry Seinfeld"
    },
    {
      quote:"Just be good and kind to your children. Not only are they the future of the world, they’re the ones who can sign you into a home.",
      person:"Dennis Miller"
    },
    {
      quote:"To the moon",
      person:"Elon mush"
    },
    {
      quote:"Bhag pujji Bc",
      person:"Rohit sharma"
    },
    {
      quote:"Sham tak khelenege in logo ki G@N# Fatt jaigi",
      person:"Virat Kholi"
    },
    {
      quote:"Idhar dekhle BSDK",
      person:"MSD"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.countryWatch();
  }

  showQuote:string = "";
  showPerson:string = "";
  changeQuote(){

    let rnd = Math.random() * this.badalQuote.length;
    rnd = Math.floor(rnd);
    this.showQuote = this.badalQuote[rnd].quote;
    this.showPerson = this.badalQuote[rnd].person;

  }

  showQuote2:string = "";
  showPerson2:string = "";
  changeQuoteAkash(){

    let rnd = Math.random() * this.akashQuote.length;
    rnd = Math.floor(rnd);
    this.showQuote2 = this.akashQuote[rnd].quote;
    this.showPerson2 = this.akashQuote[rnd].author;

  }

  countryWatch(){
    console.log("Country")
    console.log(this.countryList[5]);
  }

}
