import { Component, OnInit } from '@angular/core';
import { SwapService } from './swap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swap: SwapService) {

  }

  ngOnInit() {

  }

  getCurrencies() {
    const res = this.swap.getCurrencies()
    console.log("getCurrencies", res)
  }
}
