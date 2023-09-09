import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasAltaComponent } from './salas-alta.component';

describe('SalasAltaComponent', () => {
  let component: SalasAltaComponent;
  let fixture: ComponentFixture<SalasAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
