import { Component } from '@angular/core';
import { quoteModel } from 'src/model/quote.model';
import { QuoteService } from 'src/service/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Machine';
  author:String = '';
  quote: String = '';
  model : quoteModel;
  ngOnInit() {}

  constructor(private service:QuoteService){
    this.model = new quoteModel();
  }

  Submit(data:any) {
    // next step : get all the data and send them to be saved in the back end of the app.
    console.log("data ", data);
    this.service.saveQuotes(data);
  }

}


