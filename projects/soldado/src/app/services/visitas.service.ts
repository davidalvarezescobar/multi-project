import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private _visitas$ = new BehaviorSubject(undefined);
  readonly visitas$ = this._visitas$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadVisitasDatos() {
    if (!this._visitas$.value) {
      this.http.requestVisitasDatos().subscribe(data => this._visitas$.next(data));
    }
    return this.visitas$;
  }
}
