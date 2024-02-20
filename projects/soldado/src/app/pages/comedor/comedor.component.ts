import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComedorStoreService } from '../../services/comedor-store.service';
import { MenuStoreService } from '../../services/menu-store.service';

@Component({
  selector: 'app-comedor',
  templateUrl: './comedor.component.html',
  styleUrls: ['./comedor.component.scss']
})
export class ComedorAltaComponent implements OnInit {
  menuList$: Observable<any>;
  intorelancias$: Observable<any>
  showModal = false;
  form: FormGroup;
  isLoading: boolean | null = null;
  

  constructor(
    readonly menuStore: MenuStoreService,
    readonly comedorStore: ComedorStoreService,
    readonly fb: FormBuilder,
    readonly el: ElementRef
  ) { }

  ngOnInit(): void {
    this.menuList$ = this.menuStore.loadListaMenu();
    this.intorelancias$ = this.menuStore.loadIntolerancias();
    this.buildForm();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  buildForm() {
    this.form = this.fb.nonNullable.group({
      comedor: [''],
      fecha: [''],
      principal: [''],
      segundo: [''],
      postre: [''],
      intorelancias: this.fb.array([]),
      precioMenu: [0],
      pagado: ['']
    });

    this.form.get('principal').valueChanges.subscribe(() => this.calculateTotalAmount());
    this.form.get('segundo').valueChanges.subscribe(() => this.calculateTotalAmount());
  }

  get intolerancias() {
    return this.form.get('intorelancias') as FormArray;
  }

  onSelectIntolerancia(intolerancia: string) {
    const index = this.intolerancias.value.indexOf(intolerancia);
    if (!!~index) { // si es true, o sea, si existe: lo quitamos
      this.intolerancias.removeAt(index);
    } else { // si es false, o sea, si no existe: lo añadimos
      this.intolerancias.push(new FormControl(intolerancia));
    }
  }

  calculateTotalAmount() {
    const principalSelected = !!this.form.get('principal').value;
    const segundoSelected = !!this.form.get('segundo').value;

    if (principalSelected && segundoSelected) {
      this.form.patchValue({precioMenu: 12}); // Precio si se seleccionan ambos
    } else if (principalSelected || segundoSelected) {
      this.form.patchValue({precioMenu: 10}); // Precio si se selecciona solo uno
    }
  }

  pagar(pagado: boolean) {
    if (pagado) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = null;
        this.closeModal();
        this.form.patchValue({pagado: true});
        this.comedorStore.addReservaComedor(this.form.value);
      }, 2000);
    } else {
      this.closeModal();
      this.form.patchValue({pagado: false});
      this.comedorStore.addReservaComedor(this.form.value);
    }
  }

  resetForm() {
    while (this.intolerancias.length) {
      this.intolerancias.removeAt(0);
    }
    this.form.reset();

    const checkboxes = this.el.nativeElement.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

  }

  get pagado() {
    return this.form.value.pagado;
  }
}
