import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparcamientosAdminComponent } from './aparcamientos-admin.component';

describe('AparcamientosAdminComponent', () => {
  let component: AparcamientosAdminComponent;
  let fixture: ComponentFixture<AparcamientosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparcamientosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparcamientosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
