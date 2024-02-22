import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { VisitasService } from '../../services/visitas.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {
  showModal:boolean =false;

  tipoUsuario: string;
  visitas: any[];
  constructor(readonly dataSrv: VisitasService,
    readonly loginSrv: LoginService) { }

  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
    });

    this.dataSrv.loadVisitasDatos().subscribe(
      datos => {
        this.visitas = datos?.visitas;
        console.log(datos?.visitas)
      });
  }

  openModal(){
    this.showModal = true
  }

  closeModal(){
    this.showModal = false
  }
}
