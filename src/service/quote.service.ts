import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { quoteModel } from 'src/model/quote.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  private url = "http://localhost:8080"

  constructor(private http : HttpClient ) {}

  getQuotes() {
    return this.http.get(this.url);
  }

  private headers = new Headers({
    'Access-Control-Allow-Origin': '*',

});

  saveQuotes(body:quoteModel) :Observable<quoteModel> {
    console.log(this.url+"/quotes")
    return this.http.post<quoteModel>(this.url+"/quotes", body);
  }
  
}

