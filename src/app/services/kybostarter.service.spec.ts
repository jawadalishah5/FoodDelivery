import { TestBed } from '@angular/core/testing';

import { KybostarterService } from './kybostarter.service';

describe('KybostarterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KybostarterService = TestBed.get(KybostarterService);
    expect(service).toBeTruthy();
  });
});
