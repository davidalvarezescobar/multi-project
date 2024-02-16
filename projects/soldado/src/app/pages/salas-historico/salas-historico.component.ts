import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas-historico',
  templateUrl: './salas-historico.component.html',
  styleUrls: ['./salas-historico.component.scss']
})
export class SalasHistoricoComponent {

  constructor(private router: Router) {}
  rows: any = [
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 1',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 2',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Sala 3',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    }
  ]

  rowClick() {
    this.router.navigateByUrl('/salas');
  }
}
