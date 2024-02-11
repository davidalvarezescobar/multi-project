import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorAdminComponent } from './comedor-admin.component';

describe('ComedorAdminComponent', () => {
  let component: ComedorAdminComponent;
  let fixture: ComponentFixture<ComedorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
