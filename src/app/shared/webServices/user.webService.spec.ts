import { TestBed } from '@angular/core/testing';

import { UserWebService } from './user.webService';

describe('UserWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWebService = TestBed.get(UserWebService);
    expect(service).toBeTruthy();
  });
});
