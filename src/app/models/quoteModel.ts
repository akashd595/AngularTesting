export class QuoteModel{
    quote:string = "";
    person:string = "";
    
    constructor(quote:string, person:string){
        this.quote = quote;
        this.person = person;
    }
}