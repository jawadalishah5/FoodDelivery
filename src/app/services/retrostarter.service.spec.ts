import { TestBed } from '@angular/core/testing';

import { RetrostarterService } from './retrostarter.service';

describe('RetrostarterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrostarterService = TestBed.get(RetrostarterService);
    expect(service).toBeTruthy();
  });
});
