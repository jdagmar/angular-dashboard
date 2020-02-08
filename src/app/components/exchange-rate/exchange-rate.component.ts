import { Component, OnInit } from "@angular/core";
import { ExchangeRateService } from "./../../services/exchange/exchange-rate.service";

@Component({
  selector: "app-exchange-rate",
  templateUrl: "./exchange-rate.component.html",
  styleUrls: ["./exchange-rate.component.scss"]
})
export class ExchangeRateComponent implements OnInit {
  exchangeRates: object | undefined;

  constructor(private exchangeRateService: ExchangeRateService) {
    this.getExchangeRates();
  }

  ngOnInit() {}

  getExchangeRates() {
    this.exchangeRateService.getCurrentExchangeRate().subscribe(
      (res: {}) => {
        this.exchangeRates = res;
      },
      error => console.log(error)
    );
  }
}
