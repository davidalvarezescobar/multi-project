import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadDataDirective } from './directives/load-data.directive';


@NgModule({
  declarations: [
    LoadDataDirective
  ],
  exports: [
    LoadDataDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
