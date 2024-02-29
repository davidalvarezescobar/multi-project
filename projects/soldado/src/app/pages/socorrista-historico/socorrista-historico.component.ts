import { Component } from '@angular/core';

@Component({
  selector: 'app-socorrista-historico',
  templateUrl: './socorrista-historico.component.html',
  styleUrls: ['./socorrista-historico.component.scss']
})
export class SocorristaHistoricoComponent  {

  piscinas: any = ['Maestranza', 'Base'];

  rows: any = [
    {
      ubicacion: 'Maestranza',
      fecha: '18-Ago',
      horaEntrada: '11:30',
      horaSalida: '12:59',
      entorno: true,
      limpiafondos: true,
      cesped: false,
      botiquin: false,
      nivelAgua: true,
      nivelCloro: false,
      nivelph: true,
      botellas: 1
    },
    {
      ubicacion: 'Base',
      fecha: '18-Ago',
      horaEntrada: '11:30',
      horaSalida: '12:59',
      entorno: true,
      limpiafondos: true,
      cesped: false,
      botiquin: true,
      nivelAgua: false,
      nivelCloro: true,
      nivelph: false,
      botellas: 4
    },
    {
      ubicacion: 'Maestranza',
      fecha: '18-Ago',
      horaEntrada: '11:30',
      horaSalida: '12:59',
      entorno: false,
      limpiafondos: true,
      cesped: false,
      botiquin: true,
      nivelAgua: true,
      nivelCloro: false,
      nivelph: false,
      botellas: 2
    },
  ];
}
