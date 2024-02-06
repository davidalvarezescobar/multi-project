import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ComedorStoreService {
  private _comedor$ = new BehaviorSubject(undefined);
  readonly comedor$ = this._comedor$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadListaComedor() {
    this.http.requestListaComedor().subscribe(data => this._comedor$.next(data));
    return this.comedor$;
  }
}
