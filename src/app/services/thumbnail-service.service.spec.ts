import { TestBed } from '@angular/core/testing';

import { ThumbnailServiceService } from './thumbnail-service.service';

describe('ThumbnailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThumbnailServiceService = TestBed.get(ThumbnailServiceService);
    expect(service).toBeTruthy();
  });
});
