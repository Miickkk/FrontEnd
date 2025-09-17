import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interessado } from 'src/app/models/interessado.model';
import { MeuImovel } from 'src/app/models/meu-imovel.model';

@Component({
  selector: 'app-interna-corretor',
  templateUrl: './interna-corretor.component.html',
  styleUrls: ['./interna-corretor.component.scss']
})
export class InternaCorretorComponent implements OnInit {

  abaAtiva: 'meus-imoveis' | 'interessados' = 'meus-imoveis';
  cliente: any = {};

  meusImoveis: MeuImovel[] = [
    new MeuImovel(1, 'Apartamento Luxo', 'São Paulo', 850000, 'Apartamento', 'Apartamento moderno com 3 quartos', 'apartamento1.jpg'),
    new MeuImovel(2, 'Casa Jardim', 'Rio de Janeiro', 1200000, 'Casa', 'Casa ampla com jardim', 'casa1.jpg'),
  ];

  interessados: Interessado[] = [
    new Interessado(1, 'João Oliveira', 'joao@email.com', '11999999999', 'Tenho interesse no imóvel 1', 1),
    new Interessado(2, 'Maria Souza', 'maria@email.com', '11988888888', 'Gostaria de agendar uma visita', 2),
  ];

  mostrarForm: boolean = false;
  novoImovel: MeuImovel = new MeuImovel(0, '', '', 0, '', '', '');
  novoInteressado: Interessado = new Interessado(0, '', '', '', '', 0);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    console.log('Logout realizado!');
    this.router.navigate(['/login']);
  }

  setAba(aba: 'meus-imoveis' | 'interessados') {
    this.abaAtiva = aba;
    this.mostrarForm = false;
  }

  // ================= IMÓVEIS =================
  salvarImovel() {
    if (!this.novoImovel.nome || !this.novoImovel.valor) return;

    const novoId = this.meusImoveis.length
      ? Math.max(...this.meusImoveis.map(i => i.id ?? 0)) + 1
      : 1;

    if (this.novoImovel.id === 0) {
      this.meusImoveis.push(new MeuImovel(
        novoId,
        this.novoImovel.nome,
        this.novoImovel.cidade,
        this.novoImovel.valor,
        this.novoImovel.tipo,
        this.novoImovel.descricao,
        this.novoImovel.foto
      ));
    } else {
      const index = this.meusImoveis.findIndex(i => i.id === this.novoImovel.id);
      if (index > -1) this.meusImoveis[index] = new MeuImovel(
        this.novoImovel.id,
        this.novoImovel.nome,
        this.novoImovel.cidade,
        this.novoImovel.valor,
        this.novoImovel.tipo,
        this.novoImovel.descricao,
        this.novoImovel.foto
      );
    }

    this.novoImovel = new MeuImovel(0, '', '', 0, '', '', '');
    this.mostrarForm = false;
  }

  editarImovel(imovel: MeuImovel) {
    this.novoImovel = new MeuImovel(
      imovel.id,
      imovel.nome,
      imovel.cidade,
      imovel.valor,
      imovel.tipo,
      imovel.descricao,
      imovel.foto
    );
    this.mostrarForm = true;
  }

  excluirImovel(id: number) {
    if (confirm('Deseja realmente excluir este imóvel?')) {
      this.meusImoveis = this.meusImoveis.filter(i => i.id !== id);
    }
  }

  cadastrarNovoImovel() {
    this.novoImovel = new MeuImovel(0, '', '', 0, '', '', '');
    this.mostrarForm = true;
  }

  // ================= INTERESSADOS =================
  resetNovoInteressado() {
    return new Interessado(0, '', '', '', '', 0);
  }

  cadastrarNovoInteressado() {
    this.novoInteressado = this.resetNovoInteressado();
    this.mostrarForm = true;
  }

  editarInteressado(interessado: Interessado) {
    this.novoInteressado = new Interessado(
      interessado.id ?? 0,
      interessado.nome ?? '',
      interessado.email ?? '',
      interessado.telefone ?? '',
      interessado.mensagem ?? '',
      interessado.imovelId ?? 0
    );
    this.mostrarForm = true;
  }

  excluirInteressado(id: number | undefined) {
    if (id === undefined) return;
    if (confirm('Deseja realmente excluir este interessado?')) {
      this.interessados = this.interessados.filter(i => i.id !== id);
    }
  }

  salvarInteressado() {
    if (this.novoInteressado.id === 0) {
      const novoId = this.interessados.length
        ? Math.max(...this.interessados.map(i => i.id ?? 0)) + 1
        : 1;
      this.novoInteressado.id = novoId;
      this.interessados.push(new Interessado(
        this.novoInteressado.id,
        this.novoInteressado.nome,
        this.novoInteressado.email,
        this.novoInteressado.telefone,
        this.novoInteressado.mensagem,
        this.novoInteressado.imovelId
      ));
    } else {
      const index = this.interessados.findIndex(i => i.id === this.novoInteressado.id);
      if (index > -1) this.interessados[index] = new Interessado(
        this.novoInteressado.id,
        this.novoInteressado.nome,
        this.novoInteressado.email,
        this.novoInteressado.telefone,
        this.novoInteressado.mensagem,
        this.novoInteressado.imovelId
      );
    }
    this.novoInteressado = this.resetNovoInteressado();
    this.mostrarForm = false;
  }
}
