import { TestBed } from '@angular/core/testing';

import { CanActivateAccountGuard } from './can-activate-account.guard';

describe('CanActivateAccountGuard', () => {
  let guard: CanActivateAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
