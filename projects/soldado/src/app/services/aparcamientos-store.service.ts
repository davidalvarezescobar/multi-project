import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class AparcamientosStoreService {
  private _parking$ = new BehaviorSubject(undefined);
  readonly parking$ = this._parking$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadListaAparcamientos() {
    if (!this._parking$.value) {
      this.http.requestListaAparcamientos().subscribe(data => this._parking$.next(data));
    }
    return this.parking$;
  }
}
