import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AparcamientosStoreService } from '../../services/aparcamientos-store.service';
import { ComedorStoreService } from '../../services/comedor-store.service';
import { Filter } from '../comedor-historico/comedor-historico.component';

@Component({
  selector: 'app-aparcamientos-admin',
  templateUrl: './aparcamientos-admin.component.html',
  styleUrls: ['./aparcamientos-admin.component.scss']
})
export class AparcamientosAdminComponent {
  parkingList$: Observable<any>;
  filterApplied: Filter;
  filterTmp: Filter;
  showModal = false;

  constructor(
    readonly store: AparcamientosStoreService
  ) { }

  ngOnInit(): void {
    this.parkingList$ = this.store.loadListaAparcamientos();
  }

  comedorFilterChanged(selectedComedor) {
    if (selectedComedor) {
      this.filterTmp = {comedor:selectedComedor};
    } else {
      delete this.filterTmp?.comedor;
    }
  }

  fechaFilterChanged(fname, fvalue) {
    this.filterTmp = {...this.filterTmp, [fname]:fvalue};
  }

  buscar() {
    this.filterApplied = {...this.filterTmp};
  }

  borrar() {
    this.filterApplied = this.filterTmp = null;
  }
}
