export class Options_class{
  begin_bid: string;
  end_bid: string;
  interval: number;
  constructor(begin_bid: string, end_bid: string, interval: number) {
    this.begin_bid = begin_bid;
    this.end_bid = end_bid;
    this.interval = interval;
  }
}
