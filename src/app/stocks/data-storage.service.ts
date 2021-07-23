import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock.model';
import { environment } from 'src/environments/environment';
import NseStocks from '../json/NSE_STOCK_LIST.json';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private userStocks: Stock[] = [
    {
      symbol: 'ICICIBANK',
      longname: 'ICICI Bank',
      cmp: 655.8,
      dailyProfit: true,
    },
    {
      symbol: 'TATACONSUM',
      longname: 'Tata Consumer Products',
      cmp: 764.2,
      dailyProfit: true,
    },
    {
      symbol: 'ITC',
      longname: 'Indian Tobacco Company',
      cmp: 51.25,
      dailyProfit: false,
    },
  ];

  private nseStocks: Stock[] = NseStocks;
  refreshList = new Subject<Stock[]>();

  constructor(private http: HttpClient) {}

  get stockList() {
    return this.userStocks.slice();
  }

  get nseStockList() {
    return this.nseStocks.slice();
  }

  fetchStock = (scrip: string): Stock =>
    this.userStocks.find((stock: Stock) => stock.symbol === scrip)!;

  fetchStockData(scrip: string) {
    this.http
      .get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete`, {
        params: { q: 'ICICI', region: 'IN' },
        headers: {
          'x-rapidapi-key':
            '155b8e32e3msh241547efc081b68p1e66afjsn8f567c70beed',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      })
      .subscribe((companyData) => {
        console.log(companyData);
      });
  }

  autocomplete(value: string) {
    return this.http
      .get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete', {
        params: { q: value, region: 'IN' },
        headers: {
          'x-rapidapi-key':
            '155b8e32e3msh241547efc081b68p1e66afjsn8f567c70beed',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      })
      .pipe(
        map(
          (response: any) => (response?.quotes).filter((stock: Stock) => stock.exchange === "NSI"))
      );
  }

  addStock(stock: Stock) {
    this.userStocks.push(stock);
    this.refreshList.next(this.userStocks.slice());
  }
}
