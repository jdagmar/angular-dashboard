import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExchangeRateService {
  constructor(private http: HttpClient) {}

  getCurrentExchangeRate() {
    return this.http
      .get(
        "http://data.fixer.io/api/latest?access_key=1c66f4d5cb5e0f7ae27733ec8a85bca4"
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error);
    } else {
      console.log(error.status);
    }
    return throwError("error");
  }
}
