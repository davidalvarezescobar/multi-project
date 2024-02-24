import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aparcamientos',
  templateUrl: './aparcamientos.component.html',
  styleUrls: ['./aparcamientos.component.scss']
})
export class AparcamientosComponent implements OnInit {
  showModal = false;
  form: FormGroup;
  aparcamientos = ['aparcamiento 1', 'aparcamiento 2', 'aparcamiento 3', 'aparcamiento 4'];
  plazas = ['plaza 1','plaza 2','plaza 3','plaza 4','plaza 5','plaza 6','plaza 7','plaza 8',];
  isReservando = false;

  constructor(
    readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.nonNullable.group({
      fecha: [new Date().toISOString().slice(0, 10)],
      aparcamiento: [''],
      plaza: [''],
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  selectPlaza() {
    this.form.patchValue({
      aparcamiento: `aparcamiento ${Math.floor(Math.random() * 4) + 1}`,
      plaza: `plaza ${Math.floor(Math.random() * 8) + 1}`
    });
    this.isReservando = true;
    setTimeout(() => {
      this.isReservando = false;
      this.closeModal();
    }, 1500);
  }

}
