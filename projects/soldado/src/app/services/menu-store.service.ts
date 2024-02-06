import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuStoreService {
  private _menus$ = new BehaviorSubject(undefined);
  readonly menus$ = this._menus$.asObservable();

  constructor(
    readonly http: HttpApiService
  ) { }

  loadListaMenu() {
    if (!this._menus$.value) {
      this.http.requestListaMenus().subscribe(data => this._menus$.next(data));
    }
    return this.menus$;
  }
}
