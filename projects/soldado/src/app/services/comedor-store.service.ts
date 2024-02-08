import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ComedorStoreService {
  private _comedor$ = new BehaviorSubject([]);
  readonly comedor$ = this._comedor$.asObservable();

  private get currReservas() {
    return this._comedor$.getValue();
  }

  private updateReservas(reserva: any) {
    this._comedor$.next(reserva);
  }

  constructor(
    readonly http: HttpApiService
  ) { }

  loadListaComedor() {
    return this.comedor$;
  }

  addReservaComedor(newReserva: any) {
    this.updateReservas([...this.currReservas, newReserva]);
  }
}
