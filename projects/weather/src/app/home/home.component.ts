import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge, of, Subject, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeAll, mergeMap, share, switchMap, scan, take } from 'rxjs/operators';
import { from } from 'rxjs';
import { StoreService } from '../services/store.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private addedLocation$ = new Subject<any>();
  public searchControl = new FormControl('', Validators.minLength(4));
  public searchedLocation$ = this.initSearchLocation();
  public currentForecast$ = this.initCurrentForecast();
  public forecastList$ = this.initForecastList();

  constructor(
    private readonly weatherSrv: WeatherService,
    private readonly storeSrv: StoreService
  ) { }

  ngOnInit(): void {
  }

  private initSearchLocation() {
    return this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // sólo permiten búsquedas de más de 3 caracteres, de lo contrario se borra el resultado actual con "of('')"
      switchMap(query => query.length > 3 ? this.weatherSrv.searchLocation(query) : of('')),
      share()
    );
  }

  private initCurrentForecast() {
    return this.searchedLocation$.pipe(
      switchMap(({ data }) => data ? this.weatherSrv.forecast(data.lat, data.lon) : of(''))
    );
  }

  private initForecastList() {
    // this.storeSrv.locations$.pipe(take(1), tap(console.log)).subscribe(locations => {
    //   from(locations).pipe(
    //     tap(console.log),
    //     mergeMap((location:any) => this.weatherSrv.forecast(location.lat, location.lon))
    //   ).subscribe(console.log);
    // });
    // return this.storeSrv.locations$;

    const location$ = this.storeSrv.locations$.pipe(
      take(1),
      tap(console.log),
      mergeAll(),
      tap(console.log)
    );

    return merge(
      location$,
      this.addedLocation$
    ).pipe(
      mergeMap((location: any) => this.weatherSrv.forecast(location.lat, location.lon)),
      scan((acc: any[], location: any) => [...acc, location], [])      
    );
  }

  addLocation(location: any) {
    this.storeSrv.setLocation(location);
    this.addedLocation$.next(location);
  }
}
