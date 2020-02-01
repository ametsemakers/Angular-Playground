import { TestBed } from '@angular/core/testing';

import { VinylApiWebService } from './vinyl-api.webService';

describe('VinylApiWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinylApiWebService = TestBed.get(VinylApiWebService);
    expect(service).toBeTruthy();
  });
});
