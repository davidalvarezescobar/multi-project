import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparcamientosAltaComponent } from './aparcamientos-alta.component';

describe('AparcamientosAltaComponent', () => {
  let component: AparcamientosAltaComponent;
  let fixture: ComponentFixture<AparcamientosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparcamientosAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AparcamientosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
