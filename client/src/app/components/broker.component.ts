import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Broker_class} from "../classes/broker_class";
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: '../html/broker.component.html'
})


export class BrokerComponent implements OnInit {
  title = 'test';
  my_broker: Broker_class = new Broker_class(-1, "",0)
  my_brokers: Broker_class[] = []
  checked_id = -1;
  constructor(private HttpClient: HttpClient) {}

  ngOnInit() {
    this.HttpClient.get("http://localhost:3000/brokers").subscribe((data:any)=>{
      this.my_brokers = data;
      this.my_broker.id = this.my_brokers.length-1;
    });
  }

  displayStyle = "none";
  displayStyle2 = "none";
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
    this.my_broker.id++
    var time_broker = new Broker_class(this.my_broker.id, this.my_broker.name, this.my_broker.gold)
    this.my_brokers.push(time_broker)
    this.HttpClient.post("http://localhost:3000/brokers", this.my_brokers).subscribe();
  }
  closePopup2_edit() {
    this.wrap='none';
    this.displayStyle2 = "none";
    // @ts-ignore
    this.my_brokers[this.checked_id].gold = this.my_broker.gold
    this.HttpClient.post("http://localhost:3000/brokers", this.my_brokers).subscribe();
  }
  deleteElement(id: number) {
    this.checked_id = id;
    this.my_brokers.splice(this.checked_id, 1)
    this.my_broker.id--;
    var local_id = -1;
    for(let cur of this.my_brokers) {
        local_id++;
        cur.id = local_id;
    }
    this.my_brokers.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    this.HttpClient.post("http://localhost:3000/brokers", this.my_brokers).subscribe();
  }
}
