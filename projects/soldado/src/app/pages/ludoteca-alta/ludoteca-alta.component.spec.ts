import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudotecaAltaComponent } from './ludoteca-alta.component';

describe('LudotecaAltaComponent', () => {
  let component: LudotecaAltaComponent;
  let fixture: ComponentFixture<LudotecaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudotecaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudotecaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
