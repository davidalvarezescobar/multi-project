import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorAltaComponent } from './comedor.component';

describe('ComedorAltaComponent', () => {
  let component: ComedorAltaComponent;
  let fixture: ComponentFixture<ComedorAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedorAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedorAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
