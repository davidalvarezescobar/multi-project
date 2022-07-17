import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, filter, of } from 'rxjs';
import { mergeMap, scan, tap, map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { Weather, Location } from './models';
import { WeatherService } from './weather.service';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly _store = new BehaviorSubject<Weather[]>(null);
  weatherList$: Observable<Weather[]>;

  get weatherList() {
    return this._store.getValue();
  }

  constructor(
    private readonly localStorageSrv: LocalStorageService,
    private readonly weatherSrv: WeatherService
  ) {
    this.weatherList$ = this._store.pipe(
      tap(weatherList => {
        if (!weatherList) {
          this.loadWeatherList().subscribe(weatherList => this._store.next(weatherList));
        }
      }),
      filter(Boolean)
    );
  }

  loadWeatherList(): Observable<Weather[]> {
    const storedLocations = this.localStorageSrv.getStoredLocations();
    if (!storedLocations) {
      return of([]);
    }
    return from(storedLocations).pipe(
      mergeMap((location: Location) => this.weatherSrv.forecast(location)),
      map(res => res.data),
      scan((acc: Weather[], weather: Weather) => [...acc, weather], [])
    );
  }

  addWeather(newWeather: Weather): void {
    const idNewLocation = newWeather.location.id;
    const weather = this.weatherList.find(w => w.location.id === idNewLocation);
    if (!weather) {
      // añadimos al store:
      const updatedWeather = [...this.weatherList, newWeather];
      this._store.next(updatedWeather);
      // añadimos al session:
      this.localStorageSrv.addLocation(newWeather);
    }
  }

  removeWeather(weather: Weather) {
    const idNewLocation = weather.location.id;
    // borramos del store:
    const updatedWeather = this.weatherList.filter(w => w.location.id !== idNewLocation);
    this._store.next(updatedWeather);
    // borramos del session:
    
  }
}
