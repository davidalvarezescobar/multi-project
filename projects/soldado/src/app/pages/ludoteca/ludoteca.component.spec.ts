import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudotecaComponent } from './ludoteca.component';

describe('LudotecaComponent', () => {
  let component: LudotecaComponent;
  let fixture: ComponentFixture<LudotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
