import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDetalleComponent } from './salas-detalle.component';

describe('SalasDetalleComponent', () => {
  let component: SalasDetalleComponent;
  let fixture: ComponentFixture<SalasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
