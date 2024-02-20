import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comedor-admin',
  templateUrl: './comedor-admin.component.html',
  styleUrls: ['./comedor-admin.component.scss']
})
export class ComedorAdminComponent implements OnInit {
  today = new FormControl(new Date().toISOString().slice(0, 10));
  tablaMenus = [
    { principal: '', segundo: '', postre: '' },
    { principal: '', segundo: '', postre: '' },
    { principal: '', segundo: '', postre: '' },
  ];
  isEditar = true;
  menuForm: FormArray;
  precioMenu = '12';


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.buildForm();
  }

  buildForm() {
    this.menuForm = this.fb.array([]);
  
    this.tablaMenus.forEach(reg => {
      const group = this.fb.group(reg);
      this.menuForm.push(group);
    });
  }
  
  get menuArray() {
    console.log(this.menuForm.value)
    return this.menuForm.controls as FormGroup[];
  }

  editar() {
    this.isEditar = true;
  }

  guardar() {
    this.isEditar = false;
  }
}
