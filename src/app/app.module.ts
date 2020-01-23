import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { RoundPipe } from "./pipes/round.pipe";
import { MemoComponent } from "./components/components/memo/memo.component";
import { ExchangeRateComponent } from "./components/components/exchange-rate/exchange-rate.component";
import { FormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import localeFrExtra from "@angular/common/locales/extra/se";

registerLocaleData(localeFr, "se-SE", localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RoundPipe,
    MemoComponent,
    ExchangeRateComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
