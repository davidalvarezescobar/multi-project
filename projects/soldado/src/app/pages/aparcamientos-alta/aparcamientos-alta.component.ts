import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aparcamientos-alta',
  templateUrl: './aparcamientos-alta.component.html',
  styleUrls: ['./aparcamientos-alta.component.scss']
})
export class AparcamientosAltaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open(modal) {
    modal.showModal();
  }

  close(modal) {
    modal.close();
  }

}
