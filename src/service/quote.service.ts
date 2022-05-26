import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { quoteModel } from 'src/model/quote.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  private url = "http://localhost:8080"

  constructor(private http : HttpClient ) {}

  getQuotes() : Observable<quoteModel[]> {
    console.log(this.url+"/quotes")
    return this.http.get<quoteModel[]>(this.url+"/quotes");
  }

  saveQuotes(body:quoteModel) {
    console.log(this.url+"/save-quotes")
    return this.http.post(this.url+"/save-quotes", body);
  }

}

