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
/*
  saveQuotes(body:quoteModel) {
 //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//    let headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
const headers = { 'content-type': 'application/json'}  
const bodyJ=JSON.stringify(body);
console.log(bodyJ)
    console.log('url ',this.url+"/save-quotes", 'body ', bodyJ,  {headers})
    return this.http.post(this.url+"/save-quotes", bodyJ, {'headers':headers})

  }
  */
  saveQuotes(quote:quoteModel): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(quote);
    console.log(body)
    console.log(this.url + '/save-quotes', body,{'headers':headers})
    return this.http.post(this.url + '/save-quotes', body,{'headers':headers})
  }

}

