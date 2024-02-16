import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasHistoricoComponent } from './salas-historico.component';

describe('SalasHistoricoComponent', () => {
  let component: SalasHistoricoComponent;
  let fixture: ComponentFixture<SalasHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
