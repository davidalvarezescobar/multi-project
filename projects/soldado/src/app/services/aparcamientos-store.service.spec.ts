import { TestBed } from '@angular/core/testing';

import { AparcamientosStoreService } from './aparcamientos-store.service';

describe('AparcamientosStoreService', () => {
  let service: AparcamientosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AparcamientosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
