import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Broker_class} from "../classes/broker_class";
import {Options_class} from "../classes/options_class";
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: '../html/options.component.html'
})
export class OptionsComponent {
  title = 'test';
  my_option: Options_class = new Options_class("", "",0)
  constructor(private HttpClient: HttpClient) {}

  ngOnInit() {
    this.HttpClient.get("http://localhost:3000/option").subscribe((data:any)=>{
      this.my_option = data;
    });
  }

  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  wrap = "none"

  openPopup() {
    this.wrap='block';
    this.displayStyle = "block";
  }
  closePopup() {
    this.wrap='none';
    this.displayStyle = "none";
  }

  openPopup2() {
    this.wrap='block';
    this.displayStyle2 = "block";
  }
  closePopup2() {
    this.wrap='none';
    this.displayStyle2 = "none";
  }

  openPopup3() {
    this.wrap='block';
    this.displayStyle3 = "block";
  }
  closePopup3() {
    this.wrap='none';
    this.displayStyle3 = "none";
  }

  closePopup_edit() {
    this.wrap='none';
    this.displayStyle = "none";
    this.displayStyle2 = "none";
    this.displayStyle3 = "none";
    // @ts-ignore
    this.HttpClient.post("http://localhost:3000/option", this.my_option).subscribe();
  }
}
