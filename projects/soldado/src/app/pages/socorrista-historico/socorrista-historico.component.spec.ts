import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocorristaHistoricoComponent } from './socorrista-historico.component';

describe('SocorristaHistoricoComponent', () => {
  let component: SocorristaHistoricoComponent;
  let fixture: ComponentFixture<SocorristaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocorristaHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocorristaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
