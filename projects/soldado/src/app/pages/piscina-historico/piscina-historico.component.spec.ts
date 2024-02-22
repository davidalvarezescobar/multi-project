import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscinaHistoricoComponent } from './piscina-historico.component';

describe('PiscinaHistoricoComponent', () => {
  let component: PiscinaHistoricoComponent;
  let fixture: ComponentFixture<PiscinaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscinaHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiscinaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
