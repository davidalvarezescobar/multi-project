import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {
  showModal = false;
  isLoading: boolean | null = null;

  salas: any = [
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 1',
      capacidad: 75,
      proyector: 'Si',
      pc: 'Si',
      tv: 'Si',
      camaraConf: 'Si',
      telefono: 'Si'
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 2',
      capacidad: 150,
      proyector: 'Si',
      pc: 'Si',
      tv: 'No',
      camaraConf: 'Si',
      telefono: 'Si'
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 3',
      capacidad: 75,
      proyector: 'Si',
      pc: 'Si',
      tv: 'Si',
      camaraConf: 'Si',
      telefono: 'No'
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 1',
      capacidad: 200,
      proyector: 'Si',
      pc: 'Si',
      tv: 'Si',
      camaraConf: 'Si',
      telefono: 'Si'
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 2',
      capacidad: 105,
      proyector: 'Si',
      pc: 'Si',
      tv: 'Si',
      camaraConf: 'No',
      telefono: 'No'
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Sala 1',
      capacidad: 75,
      proyector: 'Si',
      pc: 'Si',
      tv: 'Si',
      camaraConf: 'Si',
      telefono: 'Si'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = null;
      this.closeModal();
    }, 2000);

  }

  closeModal() {
    this.showModal = false;
  }

}
