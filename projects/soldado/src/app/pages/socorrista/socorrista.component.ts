import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socorrista',
  templateUrl: './socorrista.component.html',
  styleUrls: ['./socorrista.component.scss']
})
export class SocorristaComponent {

  showModal = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  piscinas: any = [
      'Maestranza',
      'Base'
  ];
  closeModal() {
    this.showModal = false;
  }
  openModal() {
    this.showModal = true;
  }
  continuar() {
    this.closeModal();
  }
}
