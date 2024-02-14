import { Component } from '@angular/core';

@Component({
  selector: 'app-comedor-historico-admin',
  templateUrl: './comedor-historico-admin.component.html',
  styleUrls: ['./comedor-historico-admin.component.scss']
})
export class ComedorHistoricoAdminComponent {
  peticionesList = [
    { comedor: "Principal", fecha: "2024-02-19", principal: "Croquetas", segundo: "Pasta carbonara", postre: "Flan casero", intorelancias: [], precioMenu: 12, pagado: true, recibido: true, entregado: true },
    { comedor: "Cantina", fecha: "2024-02-19", principal: "Paella de marisco", segundo: "Pollo a la parrilla", postre: "Helado", intorelancias: [], precioMenu: 12, pagado: false, recibido: true, entregado: true },
    { comedor: "Edificio 2", fecha: "2024-02-20", principal: "Alubias a la riojana", segundo: "Salmón al horno", postre: "Fruta", intorelancias: [], precioMenu: 12, pagado: true, recibido: false, entregado: true }
  ];

}
