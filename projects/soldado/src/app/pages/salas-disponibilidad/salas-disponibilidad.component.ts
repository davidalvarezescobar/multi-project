import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas-disponibilidad',
  templateUrl: './salas-disponibilidad.component.html',
  styleUrls: ['./salas-disponibilidad.component.scss']
})
export class SalasDisponibilidadComponent {
  showModal = false;
  isLoading: boolean | null = null;
  constructor(private router: Router) {

  }

  reservasDisponibles: any = [
    {
      horaDesde: '08:00',
      horaHasta: '09:00',
      disponible: false,
      usuario: 'Francisco Cano'
    },
    {
      horaDesde: '09:00',
      horaHasta: '10:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '10:00',
      horaHasta: '11:00',
      disponible: false,
      usuario: 'Emilio Martinez'
    },{
      horaDesde: '11:00',
      horaHasta: '12:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '12:00',
      horaHasta: '13:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '13:00',
      horaHasta: '14:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '14:00',
      horaHasta: '15:00',
      disponible: false,
      usuario: 'Juan Antonio López'
    },
    {
      horaDesde: '15:00',
      horaHasta: '16:00',
      disponible: false,
      usuario: 'Juan Antonio López'
    },
    {
      horaDesde: '16:00',
      horaHasta: '17:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '17:00',
      horaHasta: '18:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '18:00',
      horaHasta: '19:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '19:00',
      horaHasta: '20:00',
      disponible: false,
      usuario: 'Juan Antonio López'
    },
    {
      horaDesde: '20:00',
      horaHasta: '21:00',
      disponible: false,
      usuario: 'Juan Antonio López'
    },
    {
      horaDesde: '21:00',
      horaHasta: '22:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '22:00',
      horaHasta: '23:00',
      disponible: true,
      usuario: ''
    },
    {
      horaDesde: '22:00',
      horaHasta: '00:00',
      disponible: false,
      usuario: 'Juan Antonio López'
    }
  ];


  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  confirmarReserva() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = null;
      this.closeModal();
      this.router.navigateByUrl('/salas/listado');
    }, 2000);
  }
}
