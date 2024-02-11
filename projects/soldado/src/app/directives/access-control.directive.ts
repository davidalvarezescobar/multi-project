import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Directive({
  selector: '[accessControl]'
})
export class AccessControlDirective implements OnInit{
  @Input() accessControl: 'User' | 'Admin';

  constructor(
    readonly el: ElementRef,
    readonly loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.el.nativeElement.style.display = 'none';
    this.check();
  }

  private check() {
    this.loginSrv.user$.subscribe(user => {
      this.el.nativeElement.style.display = user === this.accessControl ? 'block' : 'none';
    });
  }
}
