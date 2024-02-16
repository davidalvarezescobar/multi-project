import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-salas-historico',
  templateUrl: './salas-historico.component.html',
  styleUrls: ['./salas-historico.component.scss']
})
export class SalasHistoricoComponent implements OnInit {

  tipoUsuario = '';
  constructor(private router: Router,
    private loginSrv: LoginService) {}
  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
    });
  }
  rows: any = [
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 1',
      nombre: 'Paco Ortuño',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 2',
      nombre: 'Jesús Buendía',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Sala 3',
      nombre: 'Sergio Recuenco',
      fecha: '12/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Sala 4',
      nombre: 'Sergio Recuenco',
      fecha: '07/02/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 4',
      sala: 'Sala 3',
      nombre: 'Sergio Izquierdo',
      fecha: '01/02/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    }
  ]

  rowClick() {
    this.router.navigateByUrl('/salas');
  }
}
