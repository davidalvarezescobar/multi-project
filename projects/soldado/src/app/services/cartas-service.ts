import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  private _cartas$ = new BehaviorSubject(undefined);
  readonly cartas$ = this._cartas$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadCartasDatos() {
    if (!this._cartas$.value) {
      this.http.requestCartasDatos().subscribe(data => this._cartas$.next(data));
    }
    return this.cartas$;
  }
}
