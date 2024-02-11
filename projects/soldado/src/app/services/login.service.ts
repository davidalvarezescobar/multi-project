import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private initialUser = JSON.parse(localStorage.getItem('user')) || 'User';
  private _user = new BehaviorSubject(this.initialUser);
  readonly user$ = this._user.asObservable();


  updateUser(newUser: string) {
    localStorage.setItem('user', JSON.stringify(newUser));
    this._user.next(newUser);
    window.location.reload();
  }
}
