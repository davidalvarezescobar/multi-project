import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {

  salas: any = [
    {
      pabellon: 'Pabellon 1',
      sala: 'Eurofighter',
      capacidad: 75,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'Mirage F1',
      capacidad: 150,
      proyector: true,
      pc: true,
      tv: false,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'DHC-4 CARIBOU',
      capacidad: 75,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: false
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Bücker 131',
      capacidad: 200,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Bücker 133',
      capacidad: 105,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: false,
      telefono: false
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Junkers Ju-52',
      capacidad: 75,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
