import { Component, OnInit } from '@angular/core';
import { quoteModel } from 'src/model/quote.model';
import { QuoteService } from 'src/service/quote.service';

@Component({
  selector: 'app-save-quote',
  templateUrl: './save-quote.component.html',
  styleUrls: ['./save-quote.component.css']
})
export class SaveQuoteComponent {
  title = 'Quote Machine';
  author:String = '';
  quote: String = '';
  model : quoteModel;
  dataJson : any;
  ngOnInit() {}

  constructor(private service:QuoteService){
    this.model = new quoteModel();
  }

  Submit(data:any) {
    // next step : get all the data and send them to be saved in the back end of the app.
    this.dataJson = JSON.stringify(data);
    console.log(this.dataJson)
    this.service.saveQuotes(this.dataJson);
  }

}

