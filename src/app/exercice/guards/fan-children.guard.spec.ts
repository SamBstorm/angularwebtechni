import { TestBed } from '@angular/core/testing';

import { FanChildrenGuard } from './fan-children.guard';

describe('FanChildrenGuard', () => {
  let guard: FanChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FanChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
