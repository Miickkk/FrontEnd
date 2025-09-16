import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { CorretorGuard } from './corretor.guard';

describe('CorretorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => {
    const guard = TestBed.inject(CorretorGuard);
    return guard(...guardParameters);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
