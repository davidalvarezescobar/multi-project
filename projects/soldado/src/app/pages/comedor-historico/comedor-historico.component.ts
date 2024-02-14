import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ComedorStoreService } from '../../services/comedor-store.service';

interface Filter {
  comedor?: string; fdesde?: string; fhasta?: string 
}

@Component({
  selector: 'app-comedor-historico',
  templateUrl: './comedor-historico.component.html',
  styleUrls: ['./comedor-historico.component.scss']
})
export class ComedorHistoricoComponent implements OnInit {
  comedorList$: Observable<any>;
  filterApplied: Filter;
  filterTmp: Filter;
  showModal = false;

  constructor(
    readonly store: ComedorStoreService
  ) { }

  ngOnInit(): void {
    this.comedorList$ = this.store.loadListaComedor().pipe(tap(console.log));
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

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
