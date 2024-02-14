import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDisponibilidadComponent } from './salas-disponibilidad.component';

describe('SalasDisponibilidadComponent', () => {
  let component: SalasDisponibilidadComponent;
  let fixture: ComponentFixture<SalasDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasDisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
