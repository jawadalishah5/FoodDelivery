import { TestBed } from '@angular/core/testing';

import { KybodealService } from './kybodeal.service';

describe('KybodealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KybodealService = TestBed.get(KybodealService);
    expect(service).toBeTruthy();
  });
});
