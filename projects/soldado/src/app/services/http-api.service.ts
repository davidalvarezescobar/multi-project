import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    readonly http: HttpClient
  ) { }

  requestListaComedor() {
    return this.http.get('../../assets/mocks/comedor.json');
  }
  
  requestListaMenus() {
    return this.http.get('../../assets/mocks/menus.json');
  }
}
