import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteressadosService } from 'src/app/services/interessados.service';
import { HeaderCorretorComponent } from 'src/app/templates/header-corretor/header-corretor.component';
import { FooterComponent } from 'src/app/templates/footer/footer.component';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.scss'],
  standalone: true,
  imports: [
    CommonModule,              // 🔹 necessário para *ngFor, *ngIf
    HeaderCorretorComponent,   // 🔹 seu header
    FooterComponent            // 🔹 seu footer
  ]
})
export class InteressadosComponent implements OnInit {
  public interessados: any[] = [];
  private corretorId = 1; // pegar do login

  constructor(
    private interessadosService: InteressadosService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.listarInteressados();
  }

  listarInteressados() {
    this.interessadosService.getInteressadosByCorretor(this.corretorId).subscribe({
      next: res => this.interessados = res,
      error: () => this.notificacaoService.mostrar('Erro ao carregar interessados.')
    });
  }

removerInteressado(id: number) {
  if (!confirm('Deseja remover este interessado?')) return;

  this.interessadosService.deleteInteressado(id).subscribe({
    next: () => {
      // Atualiza o array local filtrando pelo id
      this.interessados = this.interessados.filter(i => i.id === undefined ? false : i.id !== id);
      this.notificacaoService.mostrar('Interessado removido com sucesso!');
    },
    error: (err) => {
      console.error('Erro ao remover interessado:', err);
      this.notificacaoService.mostrar('Erro ao remover interessado.');
    }
  });
}
}
