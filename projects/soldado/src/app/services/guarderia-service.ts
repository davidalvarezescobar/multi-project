import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class GuarderiaService {
  private _guarderia$ = new BehaviorSubject(undefined);
  readonly guarderia$ = this._guarderia$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadGuarderiaDatos() {
    if (!this._guarderia$.value) {
      this.http.requestGuarderiaDatos().subscribe(data => this._guarderia$.next(data));
    }
    return this.guarderia$;
  }
}
