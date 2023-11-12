import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonLoginGuard } from './non-login.guard';

describe('nonLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
