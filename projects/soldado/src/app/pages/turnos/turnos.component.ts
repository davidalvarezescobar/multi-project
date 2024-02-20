import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

  rows: any = [
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 1',
      lunes: 'Mañana',
      martes: 'Tarde',
      miercoles: 'Noche',
      jueves: 'Mañana',
      viernes: 'Libre',
      sabado: 'Mañana',
      domingo: 'Tarde'
    },
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 2',
      lunes: 'Mañana',
      martes: 'Noche',
      miercoles: 'Mañana',
      jueves: 'Tarde',
      viernes: 'Libre',
      sabado: 'Tarde',
      domingo: 'Mañana'
    },
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 3',
      lunes: 'Mañana',
      martes: 'Tarde',
      miercoles: 'Noche',
      jueves: 'Mañana',
      viernes: 'Noche',
      sabado: 'Tarde',
      domingo: 'Libre'
    },
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 4',
      lunes: 'Mañana',
      martes: 'Libre',
      miercoles: 'Noche',
      jueves: 'Noche',
      viernes: 'Mañana',
      sabado: 'Tarde',
      domingo: 'Mañana'
    },
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 5',
      lunes: 'Mañana',
      martes: 'Libre',
      miercoles: 'Mañana',
      jueves: 'Mañana',
      viernes: 'Libre',
      sabado: 'Noche',
      domingo: 'Noche'
    },
    {
      servicio: 'Patrulla Águila',
      semana: 'Semana 6',
      lunes: 'Mañana',
      martes: 'Tarde',
      miercoles: 'Noche',
      jueves: 'Tarde',
      viernes: 'Mañana',
      sabado: 'Libre',
      domingo: 'Mañana'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
