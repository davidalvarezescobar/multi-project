import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarderiaComponent } from './guarderia.component';

describe('GuarderiaComponent', () => {
  let component: GuarderiaComponent;
  let fixture: ComponentFixture<GuarderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
