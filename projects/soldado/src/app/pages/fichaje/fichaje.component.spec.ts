import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajeComponent } from './fichaje.component';

describe('FichajeComponent', () => {
  let component: FichajeComponent;
  let fixture: ComponentFixture<FichajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
