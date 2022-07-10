import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EMPTY, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, share, switchMap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public searchedTerm = new FormControl('', Validators.minLength(4));
  public result$ = this.getSearchObservable();
  public forecast$ = this.getForecastobservable();

  constructor(
    private readonly weatherSrv: WeatherService
  ) { }

  ngOnInit(): void {
  }

  private getSearchObservable() {
    return this.searchedTerm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.searchTerm(query)),
      share()
    );
  }

  private searchTerm(query: string) {
    if (query.length > 3) { // sólo permite búsquedas de más de 3 caracteres
      return this.weatherSrv.searchLocation(query).pipe(
        catchError((e: Error) => {
          console.error(e.message);
          return EMPTY;
        })
      )
    }
    return of(''); // borramos resultados anteriores
  }

  private getForecastobservable() {
    return this.result$.pipe(
      switchMap(({ data }) => this.weatherSrv.forecast(data.lat, data.lon))
    );
  }
}
