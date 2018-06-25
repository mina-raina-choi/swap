import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwapService } from './swap.service';
import { Subject } from 'rxjs';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  fromCoinChanged: Subject<number> = new Subject<number>();

  step: number = 1;

  currencies: any[];
  swapId: string;
  swapStatus: string;
  errorMsg: string;
  fromCoin: string = 'btc';
  toCoin: string = 'eth';
  fromValue: string;
  toValue: string;
  toAddr: string;

  constructor(private swap: SwapService) {

  }

  ngOnInit() {
    this.getCurrencies();
  }

  ngOnDestroy() {
    this.fromCoinChanged.unsubscribe()
  }

  tabClicked(step) {
    this.step = step
  }

  async getCurrencies() {
    const res: any = await this.swap.getCurrencies()
    this.currencies = res.result;
    console.log("getCurrencies", res)
  }

  onfromCoinChange(value){
    this.fromCoinChanged.next(value);
  }

  createSwap() {
  console.log("toValeu", this.toCoin, this.fromCoin)
  }

  async getStatus() {
    const res: any = await this.swap.getStatus(this.swapId)
    if (res.error) {
      this.errorMsg = '정확하지 않은 id입니다'
      this.swapStatus = ""
    } else {
      this.swapStatus = res.result
      this.errorMsg = ""
    }
  }
}
