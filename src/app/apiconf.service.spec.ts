import { TestBed } from '@angular/core/testing';

import { ApiconfService } from './apiconf.service';

describe('ApiconfService', () => {
  let service: ApiconfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
