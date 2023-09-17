import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaAltaComponent } from './biblioteca-alta.component';

describe('BibliotecaAltaComponent', () => {
  let component: BibliotecaAltaComponent;
  let fixture: ComponentFixture<BibliotecaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
