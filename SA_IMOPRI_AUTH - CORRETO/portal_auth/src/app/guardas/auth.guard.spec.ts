import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  // CONFIGURA O TESTE
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    // INJETAR SERVIÇOS NECESSÁRIOS
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    guard = new AuthGuard(authService, router);
  });

  // TESTA SE O GUARD FOI CRIADO
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});