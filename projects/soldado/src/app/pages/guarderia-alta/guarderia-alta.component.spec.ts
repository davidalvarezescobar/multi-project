import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarderiaAltaComponent } from './guarderia-alta.component';

describe('GuarderiaAltaComponent', () => {
  let component: GuarderiaAltaComponent;
  let fixture: ComponentFixture<GuarderiaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarderiaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarderiaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
