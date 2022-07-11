import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './approut.module';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './components/app.component';
import { EntryComponent } from './components/entry.component';
import { TestComponent } from './components/test.component';
import { BrokerComponent } from './components/broker.component';
import { StockComponent } from './components/stock.component';
import { OptionsComponent } from './components/options.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    BrokerComponent,
    StockComponent,
    OptionsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
