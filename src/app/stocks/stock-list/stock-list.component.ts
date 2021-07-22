import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[];

  constructor(private router: Router, private dataStorageService: DataStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stocks = this.dataStorageService.stocks;
  }

  onClick(scrip: string){
    this.router.navigate([scrip], {relativeTo: this.route});
  }

}
