import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly ENDPOINT = 'https://api.weatherapi.com/v1';
  private readonly APIKEY = 'deb92f6a5a004dde8f195939220907';

  constructor(
    private readonly http: HttpClient
  ) { }

  searchLocation(query: string): Observable<any> {
    const params = {
      key: this.APIKEY,
      q: query
    };
    return this.http.get<any>(this.ENDPOINT + '/search.json', { params }).pipe(
      map(locations => {
        if (locations.length) {
          return { data: locations[0] };
        }
        return { error: 'No data' };
      }),
      catchError((e: Error) => {
        console.error(e.message);
        return EMPTY;
      })
    );
  }

  forecast(lat: number, lon: number): Observable<any> {
    // `${lat},${lon}`
    const params = {
      key: this.APIKEY,
      days: 7,
      q: lat + ',' + lon
    };
    return this.http.get<any>(this.ENDPOINT + '/forecast.json', { params });
  }
}
