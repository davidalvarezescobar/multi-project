import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { VisitasService } from '../../services/visitas.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {
  fechaActual: string;
  showModal:boolean =false;

  tipoUsuario: string;
  visitas: any[];
  constructor(readonly dataSrv: VisitasService,
    readonly loginSrv: LoginService) { }

  ngOnInit(): void {
    this.fechaActual = new Date().toISOString().slice(0, 16);

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

  formatDateDDMMYYYY(fecha: string): string {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mes = partesFecha[1];
    const año = partesFecha[0];
    return `${año}-${mes}-${dia}`;
  }

  formatDateConMesEscritoDDMM(fecha) {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mesNumerico = parseInt(partesFecha[1], 10);
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const mes = meses[mesNumerico - 1];
    return `${dia}-${mes}`;
  }
}
