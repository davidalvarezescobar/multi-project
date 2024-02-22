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
  showModal = false;
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
      sala: 'Eurofighter',
      nombre: 'Paco Ortuño',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Mirage F1',
      nombre: 'Jesús Buendía',
      fecha: '01/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'DHC-4 CARIBOU',
      nombre: 'Sergio Recuenco',
      fecha: '12/01/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Bücker 131',
      nombre: 'Sergio Recuenco',
      fecha: '07/02/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 4',
      sala: 'Bücker 133',
      nombre: 'Sergio Izquierdo',
      fecha: '01/02/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    },
    {
      pabellon: 'Pabellon 4',
      sala: 'Junkers Ju-52',
      nombre: 'Sergio Izquierdo',
      fecha: '01/02/2024',
      horaDesde: '10:41',
      horaHasta: '11:30'
    }
  ]

  rowClick() {
    this.router.navigateByUrl('/salas');
  }
  closeModal() {
    this.showModal = false;
  }
  openModal(event:any) {
    event.stopPropagation();
    this.showModal = true;
  }
}
