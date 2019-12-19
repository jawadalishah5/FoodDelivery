import { TestBed } from '@angular/core/testing';

import { RetrodealService } from './retrodeal.service';

describe('RetrodealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrodealService = TestBed.get(RetrodealService);
    expect(service).toBeTruthy();
  });
});
