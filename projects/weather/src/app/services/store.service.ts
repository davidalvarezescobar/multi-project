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
  weatherList$ = this.initWeatherList();

  get weatherList() {
    return this._store.getValue();
  }

  constructor(
    private readonly localStorageSrv: LocalStorageService,
    private readonly weatherSrv: WeatherService
  ) { }

  initWeatherList() {
    return this._store.pipe(
      tap(weatherList => {
        if (!weatherList) {
          this.loadWeatherList().subscribe((storeData: Weather[]) => this._store.next(storeData));
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
    // 'storedLocations' es un array y, mediante el operador 'from' obtengo una petición por cada uno de sus registros;
    // la idea es hacer peticiones en paralelo sin tener que esperar a que acaben todas,
    // e ir pintandolas en la tabla según se vayan recibiendo:
    return from(storedLocations).pipe(
      tap(x => console.log('Stored Locations:', x)),
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
    this.localStorageSrv.removeLocation(weather);
  }
}
