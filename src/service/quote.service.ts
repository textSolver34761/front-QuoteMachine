import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quoteModel } from 'src/model/quote.model';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  private url = "http://localhost:8080"

  constructor(private http : HttpClient ) {}

  getQuotes() {
    return this.http.get(this.url);
  }

  saveQuotes(quotes:quoteModel){
    return this.http.post(this.url, quotes);
  }
  
}

