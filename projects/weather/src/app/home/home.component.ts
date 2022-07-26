import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged, share, switchMap } from 'rxjs/operators';
import { HttpData, WeatherService } from '../services/weather.service';
import { Weather, Location } from '../services/models';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private currentWeather: Weather;
  public searchControl = new FormControl('', Validators.minLength(4));
  public searchLocation$ = this.initSearchLocation();
  public currentForecast$ = this.initCurrentForecast();
  public forecastList$ = this.initForecastList();

  constructor(
    private readonly weatherSrv: WeatherService,
    private readonly storeSrv: StoreService
  ) { }

  ngOnInit(): void {
  }

  private initSearchLocation(): Observable<HttpData<Location>> {
    return this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // sólo permiten búsquedas de más de 3 caracteres, de lo contrario se borra el resultado actual con "of({})"
      switchMap(query => query.length > 3 ? this.weatherSrv.searchLocation(query) : of({})),
      tap((x: any) => console.log('searchLocation:', x)),
      share()
    );
  }

  private initCurrentForecast(): Observable<HttpData<Weather>> {
    return this.searchLocation$.pipe(
      switchMap(res => {
        const location = res.data;
        if (location) {
          // si recibo 'data' y por tanto se ha encontrado la ciudad buscada
          // devuelvo el observable forecast:
          return this.weatherSrv.forecast(location).pipe(
            tap(res => this.currentWeather = res.data)
          );
        } else {
          // si de searchLocation recibo 'loading', 'error' o el '{}' que propago cuando 
          // la ciudad a buscar no tiene más de 3 caracteres, devuelvo un '{}'
          // para que no se muestre el <footer> en el html:
          return of({});
        }
      })
    );
  }

  private initForecastList() {
    return this.storeSrv.weatherList$;
  }

  addWeather() {
    this.storeSrv.addWeather(this.currentWeather);
  }

  removeWeather(weather: Weather) {
    this.storeSrv.removeWeather(weather)
  }

  trackByFn(index, item: Weather) {
    return item.location.name;
  }
}
