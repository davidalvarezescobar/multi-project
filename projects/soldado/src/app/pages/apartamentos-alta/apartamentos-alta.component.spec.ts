import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosAltaComponent } from './apartamentos-alta.component';

describe('ApartamentosAltaComponent', () => {
  let component: ApartamentosAltaComponent;
  let fixture: ComponentFixture<ApartamentosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartamentosAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
