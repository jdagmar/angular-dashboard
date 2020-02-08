import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { RoundPipe } from "./pipes/round.pipe";
import { MemoComponent } from "./components/memo/memo.component";
import { ExchangeRateComponent } from "./components/exchange-rate/exchange-rate.component";
import { FormsModule } from "@angular/forms";
import { DateTimeComponent } from "./components/date-time/date-time.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AboutComponent } from "./components/about/about.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RoundPipe,
    MemoComponent,
    ExchangeRateComponent,
    DateTimeComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
