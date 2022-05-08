import { TestBed } from '@angular/core/testing';

import { ApirequestInterceptor } from './apirequest.interceptor';

describe('ApirequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApirequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApirequestInterceptor = TestBed.inject(ApirequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
