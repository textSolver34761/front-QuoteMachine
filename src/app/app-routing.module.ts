import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuoteComponent } from './list-quote/list-quote.component';
import { SaveQuoteComponent } from './save-quote/save-quote.component';

const routes: Routes = [
  { path: '', component: SaveQuoteComponent},
  { path: 'list', component: ListQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
