export class Stock_class{
  id: number;
  name: string;
  distribution: string;
  max_change: number;
  max_number_stocks: number;
  first_price: number
  constructor(id:number, name: string, distribution: string, max_change: number, max_number_stocks: number, first_price: number) {
    this.id = id;
    this.name = name;
    this.distribution = distribution;
    this.max_change = max_change;
    this.max_number_stocks = max_number_stocks;
    this.first_price = first_price;
  }
}
