import { TestBed } from '@angular/core/testing';

import { CRUDTestService } from './crudtest.service';

describe('CRUDTestService', () => {
  let service: CRUDTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
