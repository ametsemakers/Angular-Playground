import { TestBed } from '@angular/core/testing';

import { TestObservableService } from './test-observable.service';

describe('TestObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestObservableService = TestBed.get(TestObservableService);
    expect(service).toBeTruthy();
  });
});
