import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent} from "./components/entry.component";
import { BrokerComponent} from "./components/broker.component";
import { StockComponent} from "./components/stock.component";
import { TestComponent } from './components/test.component';
import { OptionsComponent } from './components/options.component';

const routes: Routes = [
  {path:'',component: EntryComponent},
  {path:'broker',component: BrokerComponent},
  {path:'options',component: OptionsComponent},
  {path:'stock',component: StockComponent},
  {path:'test',component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
