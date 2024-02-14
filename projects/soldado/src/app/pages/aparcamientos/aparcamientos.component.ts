import { Component } from '@angular/core';

@Component({
  selector: 'app-aparcamientos',
  templateUrl: './aparcamientos.component.html',
  styleUrls: ['./aparcamientos.component.scss']
})
export class AparcamientosComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
