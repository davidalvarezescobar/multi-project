import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piscina',
  templateUrl: './piscina.component.html',
  styleUrls: ['./piscina.component.scss'],
})
export class PiscinaComponent implements OnInit {
  showModal = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  piscinas: any = [
    {
      nombre: 'Maestranza',
    },
    {
      nombre: 'Base',
    },
  ];
  closeModal() {
    this.showModal = false;
  }
  openModal() {
    this.showModal = true;
  }
  continuar() {
    this.closeModal();
    this.router.navigateByUrl('/piscina/historico');
  }
}
