import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockInfoComponent } from './stocks/stock-info/stock-info.component';
import { StocksComponent } from './stocks/stocks.component';
import { WelcomePageComponent } from './stocks/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'harshk', pathMatch: 'full'},
  {path: ':user', component: StocksComponent, children: [
    {path: 'home', component: WelcomePageComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: ':scrip', component: StockInfoComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
