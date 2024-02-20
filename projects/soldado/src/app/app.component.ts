import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'soldado';
  showMenu: boolean;
  users = ['User', 'Admin'];
  currUser = this.loginSrv.user$;
  showDatos: boolean = false;
  
  @HostBinding('class.mobile') isMobile: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  };
  

  constructor(
    readonly loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.showMenu = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  hideMenu(): void {
    if (!this.showMenu) {
      return;
    }

    if (this.isMobile) {
      this.showMenu = false;
    }
  }

  changeUser(newUser: string) {
    this.loginSrv.updateUser(newUser);
  }
}
