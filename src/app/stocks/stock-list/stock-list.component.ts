import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { DataStorageService } from '../data-storage.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[];
  nseStocks: Stock[];
  autoComplete = new FormControl();
  filteredStocks: Observable<Stock[]>;
  stockListSub: Subscription;

  constructor(private router: Router, private dataStorageService: DataStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nseStocks = this.dataStorageService.nseStockList;

    this.stocks = this.dataStorageService.stockList;
    this.stockListSub = this.dataStorageService.refreshList.subscribe((updatedStocks: Stock[]) => this.stocks = updatedStocks);

    // this.filteredStocks = this.autoComplete.valueChanges.pipe(startWith(''), map(
    //   value => {
    //     return this._filter(value)
    //   }
    //   ));
    this.filteredStocks = this.autoComplete.valueChanges.pipe(
      startWith(''),
      //debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        if(value)
          return this.dataStorageService.autocomplete(value);
        return of([]);
      })
      );
  }

  onListClick(scrip: string){
    this.router.navigate([scrip], {relativeTo: this.route});
  }

  onSearchClick(stock: Stock) {
    this.dataStorageService.addStock(stock);
    this.autoComplete.setValue("");
  }

  private _filter(value: string):Stock[] {
    const filterValue = this._normalizeValue(value);
    return this.nseStocks.filter(nseStock => this._normalizeValue(nseStock.symbol).includes(filterValue));
  }

  private _normalizeValue = (value: string): string => (value).toLowerCase().replace(/\s/g, '');
}
