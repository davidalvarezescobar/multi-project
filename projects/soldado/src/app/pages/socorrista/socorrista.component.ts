import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socorrista',
  templateUrl: './socorrista.component.html',
  styleUrls: ['./socorrista.component.scss']
})
export class SocorristaComponent {

  tipoUsuario: string;  //si es admin o user
  showModal = false;

  constructor(readonly loginSrv: LoginService,
    readonly router: Router) {}

  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
      if(this.tipoUsuario  === 'Admin') {
        this.router.navigateByUrl('/socorrista/historico')
      }
    });
  }

  piscinas: any = [
      'Maestranza',
      'Base'
  ];
  closeModal() {
    this.showModal = false;
  }
  openModal() {
    this.showModal = true;
  }
  continuar() {
    this.closeModal();
  }
}
