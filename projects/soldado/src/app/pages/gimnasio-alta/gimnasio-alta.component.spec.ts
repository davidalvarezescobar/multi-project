import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasioAltaComponent } from './gimnasio-alta.component';

describe('GimnasioAltaComponent', () => {
  let component: GimnasioAltaComponent;
  let fixture: ComponentFixture<GimnasioAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnasioAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnasioAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
