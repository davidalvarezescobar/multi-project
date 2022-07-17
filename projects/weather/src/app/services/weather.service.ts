import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of, startWith } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Location, Weather } from './models'
import { ValidationErrors } from '@angular/forms';

export interface HttpData<T> {
  data?: T;
  error?: ValidationErrors;
  loading?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly ENDPOINT = 'https://api.weatherapi.com/v1';
  private readonly APIKEY = 'deb92f6a5a004dde8f195939220907';

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Searchs location
   * Obtiene la parte 'Location' del objeto 'Weather'
   * @param query 
   * @returns location 
   */
  searchLocation(query: string): Observable<HttpData<Location>> {
    const params = {
      key: this.APIKEY,
      q: query
    };
    return this.http.get<HttpData<Location>>(this.ENDPOINT + '/search.json', { params }).pipe(
      map((locations: any) => {
        if (locations.length) {
          const location = locations[0] as Location;
          return { data: location };
        }
        const noData: ValidationErrors = { noData: true };
        return { error: noData };
      }),
      startWith({ loading: true }),
      catchError((e: Error) => {
        const http = { http: e.message };
        return of({ error: http });
      })
    );
  }

  forecast(location: Location): Observable<HttpData<Weather>> {
    const { lat, lon } = location;
    const params = {
      key: this.APIKEY,
      days: 7,
      q: `${lat},${lon}`
    };
    return this.http.get<any>(this.ENDPOINT + '/forecast.json', { params }).pipe(
      map(({ current, forecast }: any) => {
        return { data: { current, forecast, location } };
      }),
      catchError((e: Error) => {
        const http = { http: e.message };
        return of({ error: http });
      })
    );
  }
}
