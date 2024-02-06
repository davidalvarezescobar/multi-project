import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comedorFilter'
})
export class ComedorFilterPipe implements PipeTransform {

  transform(value: any[], filter: any): any[] {
    if (!value || !filter || Object.keys(filter).length === 0) {
      return value;
    }

    // Filtros acumulativos
    const filtersToApply = [];

    if (filter.comedor) {
      filtersToApply.push(reg => reg.comedor === filter.comedor);
    }

    if (filter.fdesde) {
      filtersToApply.push(reg => new Date(reg.fecha) > new Date(filter.fdesde));
    }

    if (filter.fhasta) {
      filtersToApply.push(reg => new Date(reg.fecha) < new Date(filter.fhasta));
    }

    // se aplican todos los filtros acumulativos
    return value.filter(reg => filtersToApply.every(filterFn => filterFn(reg)));
  }

}
