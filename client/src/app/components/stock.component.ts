import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Broker_class} from "../classes/broker_class";
import {OnInit} from '@angular/core'
import {Stock_class} from "../classes/stock_class";

@Component({
  selector: 'app-root',
  templateUrl: '../html/stock.component.html'
})
export class StockComponent {
  title = 'test';
  my_stock: Stock_class = new Stock_class(-1, "", "", 0, 0, 0)
  my_stocks: Stock_class[] = []
  checked_id = -1;
  constructor(private HttpClient: HttpClient) {}
  ngOnInit() {
    this.HttpClient.get("http://localhost:3000/stocks").subscribe((data:any)=>{
      this.my_stocks = data;
      this.my_stock.id = this.my_stocks.length-1;
    });
  }

  displayStyle = "none";
  displayStyle2 = "none"
  wrap = "none"

  openPopup() {
    this.wrap='block';
    this.displayStyle = "block";
  }
  closePopup() {
    this.wrap='none';
    this.displayStyle = "none";
  }

  openPopup2(id: number) {
    this.checked_id = id;
    this.wrap='block';
    this.displayStyle2 = "block";
  }
  closePopup2() {
    this.wrap='none';
    this.displayStyle2 = "none";
  }

  closePopup_create() {
    this.wrap='none';
    this.displayStyle = "none";
    // @ts-ignore
    this.my_stock.id++
    var time_stock = new Stock_class(this.my_stock.id, this.my_stock.name, this.my_stock.distribution, this.my_stock.max_change, this.my_stock.max_number_stocks, this.my_stock.first_price)
    this.my_stocks.push(time_stock)
    this.HttpClient.post("http://localhost:3000/stocks", this.my_stocks).subscribe();
  }

  closePopup2_edit() {
    this.wrap='none';
    this.displayStyle2 = "none";
    // @ts-ignore
    this.my_stocks[this.checked_id].name = this.my_stock.name
    this.my_stocks[this.checked_id].distribution = this.my_stock.distribution
    this.my_stocks[this.checked_id].max_change = this.my_stock.max_change
    this.my_stocks[this.checked_id].max_number_stocks = this.my_stock.max_number_stocks
    this.my_stocks[this.checked_id].first_price = this.my_stock.first_price
    this.HttpClient.post("http://localhost:3000/stocks", this.my_stocks).subscribe();
  }

  deleteElement(id: number) {
    this.checked_id = id;
    this.my_stocks.splice(this.checked_id, 1)
    this.my_stock.id--;
    var local_id = -1;
    for(let cur of this.my_stocks) {
      local_id++;
      cur.id = local_id;
    }
    this.my_stocks.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    this.HttpClient.post("http://localhost:3000/stocks", this.my_stocks).subscribe();
  }


}
