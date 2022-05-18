import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Machine';
  author:String = '';
  quote: String = '';
  quoteModel: any

  ngOnInit() {}

  Submit() {
    console.log("Quote",this.quote)
    console.log("Author",this.author)
    // next step : get all the data and send them to be saved in the back end of the app.
  }

}


