import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListQuoteComponent } from './list-quote/list-quote.component';
import { SaveQuoteComponent } from './save-quote/save-quote.component';
import { quoteModel } from 'src/model/quote.model';

@NgModule({
  declarations: [
    AppComponent,
    ListQuoteComponent,
    SaveQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [quoteModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
