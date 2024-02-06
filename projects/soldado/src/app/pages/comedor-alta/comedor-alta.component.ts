import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MenuStoreService } from '../../services/menu-store.service';

@Component({
  selector: 'app-comedor-alta',
  templateUrl: './comedor-alta.component.html',
  styleUrls: ['./comedor-alta.component.scss']
})
export class ComedorAltaComponent implements OnInit {
  menuList$: Observable<any>;
  showModal = false;
  form: FormGroup;
  totalAmount = 0;
  isPagado: boolean | null = null;
  isLoading: boolean | null = null;
  

  constructor(
    readonly store: MenuStoreService,
    readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.menuList$ = this.store.loadListaMenu();
    this.buildForm();
  }

  openModal() {
    this.form.reset();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmMenu() {
    this.closeModal();
  }

  buildForm() {
    this.form = this.fb.group({
      principal: this.fb.control(null),
      segundo: this.fb.control(null),
      bebida: this.fb.control(null),
      postre: this.fb.control(null),
      cafe: this.fb.control(null)
    });

    this.form.valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  }

  calculateTotalAmount() {
    const principalSelected = !!this.form.get('principal').value;
    const segundoSelected = !!this.form.get('segundo').value;

    if (principalSelected && segundoSelected) {
      this.totalAmount = 12; // Precio si se seleccionan ambos
    } else if (principalSelected || segundoSelected) {
      this.totalAmount = 10; // Precio si se selecciona solo uno
    } else {
      this.totalAmount = 0; // Precio si no se selecciona ninguno
    }
  }

  pagar() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = null;
      this.isPagado = false;
    }, 1500);
  }
}
