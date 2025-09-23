import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// SERVIÇO DE NOTIFICAÇÕES
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

    // OBSERVABLE PARA MENSAGENS
  private _mensagem = new BehaviorSubject<string | null>(null);
  public mensagem$ = this._mensagem.asObservable();

  constructor() {}

// MOSTRAR MENSAGEM
  mostrar(mensagem: string, duracao: number = 3000) {
    this._mensagem.next(mensagem);
    setTimeout(() => this._mensagem.next(null), duracao);
  }

  // LIMPAR MENSAGEM
  limpar() {
    this._mensagem.next(null);
  }
}
