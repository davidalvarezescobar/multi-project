import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitas-alta',
  templateUrl: './visitas-alta.component.html',
  styleUrls: ['./visitas-alta.component.scss']
})
export class VisitasAltaComponent implements OnInit {
  vehiculo: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  setVehiculo(vehiculo: boolean){
    this.vehiculo = vehiculo
  }

}
