import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class DatosAdminGuard implements CanActivate {
  constructor(
    readonly router: Router,
    readonly loginSrv: LoginService
  ) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.loginSrv.user$.pipe(
      map(user => {
        if (user === 'User') {
          return this.router.parseUrl('datos');
        }
        return true;
      })
    );
  }
  
}
