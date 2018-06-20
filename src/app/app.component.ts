import { Component, OnInit } from '@angular/core';
import { SwapService } from './swap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: any[];
  swapId: string;
  swapStatus: string;
  errorMsg: string;

  constructor(private swap: SwapService) {

  }

  ngOnInit() {

  }

  async getCurrencies() {
    const res: any = await this.swap.getCurrencies()
    this.currencies = res.result;
    console.log("getCurrencies", res)
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
