import { Injectable } from "@angular/core";
import { Stock } from "./stock.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  stocks: Stock[] = [{scripName: "ICICIBANK", companyName: "ICICI Bank", cmp: 655.80, dailyProfit: true},
                     {scripName: "TATACONSUM", companyName: "Tata Consumer Products", cmp: 764.20, dailyProfit: true},
                     {scripName: "ITC", companyName: "Indian Tobacco Company", cmp: 51.25, dailyProfit: false}];

  get stockList(){
    return this.stocks.slice();
  }

  fetchStock = (scrip: string): Stock => this.stocks.find((stock: Stock) => stock.scripName === scrip)!;
}
