import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorHistoricoAdminComponent } from './comedor-historico-admin.component';

describe('ComedorHistoricoAdminComponent', () => {
  let component: ComedorHistoricoAdminComponent;
  let fixture: ComponentFixture<ComedorHistoricoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedorHistoricoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedorHistoricoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
