import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasAltaComponent } from './visitas-alta.component';

describe('VisitasAltaComponent', () => {
  let component: VisitasAltaComponent;
  let fixture: ComponentFixture<VisitasAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
