import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { RoundPipe } from "./pipes/round.pipe";
import { MemoComponent } from "./components/components/memo/memo.component";
import { ExchangeRateComponent } from "./components/components/exchange-rate/exchange-rate.component";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localeSe from "@angular/common/locales/se";
import { DateTimeComponent } from "./components/date-time/date-time.component";
import { AsideNavComponent } from "./components/aside-nav/aside-nav.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";

registerLocaleData(localeSe, "se-SE");

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RoundPipe,
    MemoComponent,
    ExchangeRateComponent,
    DateTimeComponent,
    AsideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
