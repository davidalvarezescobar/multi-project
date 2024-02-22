import { Component } from '@angular/core';

@Component({
  selector: 'app-piscina-historico',
  templateUrl: './piscina-historico.component.html',
  styleUrls: ['./piscina-historico.component.scss']
})
export class PiscinaHistoricoComponent {

  showModal = false;
  piscinas: any = ['Maestranza', 'Base']
  rows: any = [
    {
      ubicacion: 'Maestranza',
      fecha: '18 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
    },
    {
      ubicacion: 'Base',
      fecha: '15 de Agosto'
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
