import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscinaAltaComponent } from './piscina-alta.component';

describe('PiscinaAltaComponent', () => {
  let component: PiscinaAltaComponent;
  let fixture: ComponentFixture<PiscinaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscinaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiscinaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
