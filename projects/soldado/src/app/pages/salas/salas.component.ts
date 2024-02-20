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
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 2',
      capacidad: 150,
      proyector: true,
      pc: true,
      tv: false,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 1',
      sala: 'Sala 3',
      capacidad: 75,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: false
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 1',
      capacidad: 200,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: true,
      telefono: true
    },
    {
      pabellon: 'Pabellon 2',
      sala: 'Sala 2',
      capacidad: 105,
      proyector: true,
      pc: true,
      tv: true,
      camaraConf: false,
      telefono: false
    },
    {
      pabellon: 'Pabellon 3',
      sala: 'Sala 1',
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
