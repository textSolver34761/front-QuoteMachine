import { Component } from '@angular/core';
import { quoteModel } from 'src/model/quote.model';
import { QuoteService } from 'src/service/quote.service';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent {

  constructor(private service:QuoteService) { }
  public listQuote:any  
  ngOnInit(){
    this.service.getQuotes().subscribe((data : quoteModel[]) => {
      this.listQuote = data;
    })
  }

}
