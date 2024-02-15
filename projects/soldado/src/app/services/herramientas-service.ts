import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {
  private _herramientas$ = new BehaviorSubject(undefined);
  readonly herramientas$ = this._herramientas$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadHerramientasDatos() {
    if (!this._herramientas$.value) {
      this.http.requestHerramientasDatos().subscribe(data => this._herramientas$.next(data));
    }
    return this.herramientas$;
  }
}
