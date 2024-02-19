import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  
  requestGuarderiaDatos() {
    return this.http.get('../../assets/mocks/guarderia.json');
  }

  requestHerramientasDatos() {
    return this.http.get('../../assets/mocks/herramientas.json');
  }

  requestCartasDatos() {
    return this.http.get('../../assets/mocks/cartas.json');
  }
}
