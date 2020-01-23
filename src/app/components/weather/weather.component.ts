import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  weather: object | undefined;
  defaultCity = "stockholm";
  cities = ["stockholm", "gothenburg", "malmö", "uppsala", "umeå", "miami"];
  isWeatherOffline = false;

  constructor(private weatherService: WeatherService) {
    this.getWeather(this.defaultCity);
  }

  ngOnInit() {}

  getWeather(city) {
    this.weatherService.getCurrentWeatherByCity(city).subscribe(
      (res: {}) => {
        this.weather = res;
      },
      error => (this.isWeatherOffline = true)
    );
  }
}
