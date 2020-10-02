import { TestBed } from '@angular/core/testing';

import { CanChangePasswordGuard } from './can-change-password.guard';

describe('CanChangePasswordGuard', () => {
  let guard: CanChangePasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanChangePasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
