import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocorristaComponent } from './socorrista.component';

describe('SocorristaComponent', () => {
  let component: SocorristaComponent;
  let fixture: ComponentFixture<SocorristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocorristaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocorristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
