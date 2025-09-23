import { Component } from '@angular/core';
import { NotificacaoService } from '../app/services/notificacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

// COMPONENTE RAIZ NOTIFICAÇÕES
export class AppComponent {
  mensagem$ = this.notificacaoService.mensagem$;

  // SERVIÇO DE NOTIFICAÇÕES
  constructor(private notificacaoService: NotificacaoService) {}
}
