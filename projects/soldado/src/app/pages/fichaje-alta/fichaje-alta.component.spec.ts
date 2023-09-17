import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajeAltaComponent } from './fichaje-alta.component';

describe('FichajeAltaComponent', () => {
  let component: FichajeAltaComponent;
  let fixture: ComponentFixture<FichajeAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichajeAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajeAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
