import { TestBed } from '@angular/core/testing';

import { MrslGuard } from './mrsl.guard';

describe('MrslGuard', () => {
  let guard: MrslGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MrslGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
