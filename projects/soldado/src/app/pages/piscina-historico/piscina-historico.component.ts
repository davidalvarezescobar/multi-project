import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-piscina-historico',
  templateUrl: './piscina-historico.component.html',
  styleUrls: ['./piscina-historico.component.scss']
})
export class PiscinaHistoricoComponent implements OnInit {
  tipoUsuario: string = '';
  showModal = false;
  piscinas: any = ['Maestranza', 'Base'];
  constructor (private loginSrv: LoginService) {

  }
  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
    });
  }


  rows: any = [
    {
      ubicacion: 'Maestranza',
      fecha: '18 de Agosto',
      nombre: 'Juan Romario',
      horaEntrada: '11:30',
      horaSalida: '12:59'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto',
      nombre: 'Antonio Aguado',
      horaEntrada: '09:30',
      horaSalida: '12:59'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto',
      nombre: 'Juan Romario',
      horaEntrada: '08:30',
      horaSalida: '09:59'
    },
    {
      ubicacion: 'Maestranza',
      fecha: '15 de Agosto',
      nombre: 'Juan Romario',
      horaEntrada: '11:30',
      horaSalida: '14:59'
    },
    {
      ubicacion: 'Maestranza',
      fecha: '15 de Agosto',
      nombre: 'Alfonso Lopez',
      horaEntrada: '11:30',
      horaSalida: '12:59'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto',
      nombre: 'Juan Escudero',
      horaEntrada: '11:30',
      horaSalida: '12:59'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto',
      nombre: 'Roman Lozano',
      horaEntrada: '11:30',
      horaSalida: '12:59'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto',
      nombre: 'Juan Romario',
      horaEntrada: '11:30',
      horaSalida: '12:59'
    },
  ];
  
  closeModal() {
    this.showModal = false;
  }
  openModal(event:any) {
    event.stopPropagation();
    this.showModal = true;
  }
}
