import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit, OnDestroy {
  selectedStock: Stock;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {this.selectedStock = this.dataStorageService.fetchStock(params['scrip'])}
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
