import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComedorStoreService } from '../../services/comedor-store.service';

interface Filter {
  comedor?: string; fdesde?: string; fhasta?: string 
}

@Component({
  selector: 'app-comedor',
  templateUrl: './comedor.component.html',
  styleUrls: ['./comedor.component.scss']
})
export class ComedorComponent implements OnInit {
  comedorList$: Observable<any>;
  filterApplied: Filter;
  filterTmp: Filter;

  constructor(
    readonly store: ComedorStoreService
  ) { }

  ngOnInit(): void {
    this.comedorList$ = this.store.loadListaComedor();
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
