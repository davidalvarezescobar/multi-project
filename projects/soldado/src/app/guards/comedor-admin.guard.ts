import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ComedorAdminGuard implements CanActivate {
  constructor(
    readonly router: Router,
    readonly loginSrv: LoginService
  ) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.loginSrv.user$.pipe(
      map(user => {
        if (user === 'User') {
          return this.router.parseUrl('comedor');
        }
        return true;
      })
    );
  }
  
}