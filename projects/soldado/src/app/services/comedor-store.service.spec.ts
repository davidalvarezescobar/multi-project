import { TestBed } from '@angular/core/testing';

import { CommedorStoreService } from './comedor-store.service';

describe('CommedorStoreService', () => {
  let service: CommedorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommedorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
