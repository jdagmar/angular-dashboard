import { Component, OnInit } from "@angular/core";
import { ExchangeRateService } from "./../../services/exchange/exchange-rate.service";

type ExchangeRates = {
  rates: {
    EUR: number;
    SEK: number;
  };
  date: Date;
};

@Component({
  selector: "app-exchange-rate",
  templateUrl: "./exchange-rate.component.html",
  styleUrls: ["./exchange-rate.component.scss"]
})
export class ExchangeRateComponent implements OnInit {
  exchangeRates: ExchangeRates | undefined;

  constructor(private exchangeRateService: ExchangeRateService) {
    this.getExchangeRates();
  }

  ngOnInit() {}

  getExchangeRates() {
    this.exchangeRateService.getCurrentExchangeRate().subscribe(
      (res: ExchangeRates) => {
        this.exchangeRates = res;
      },
      error => console.log(error)
    );
  }
}
