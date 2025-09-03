import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '.auth.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    guard = new AuthGuard(authService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});