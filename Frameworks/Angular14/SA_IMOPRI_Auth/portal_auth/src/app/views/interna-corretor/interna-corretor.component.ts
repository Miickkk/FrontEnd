import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Interessado {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  imovelId: number;
}

interface Imovel {
  id: number;
  nome: string;
  cidade: string;
  valor: number;
  tipo: string;
  descricao: string;
  foto: string;
}

@Component({
  selector: 'app-corretor',
  templateUrl: './interna-corretor.component.html',
  styleUrls: ['./interna-corretor.component.scss']
})
export class InternaCorretorComponent implements OnInit {

  abaAtiva: 'interessados' | 'imoveis' = 'interessados';

  interessados: Interessado[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '(11) 99999-8888',
      mensagem: 'Gostaria de agendar uma visita ao apartamento no centro.',
      imovelId: 1
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      telefone: '(48) 98888-7777',
      mensagem: 'Tenho interesse na casa de praia, ainda está disponível?',
      imovelId: 2
    },
    {
      id: 3,
      nome: 'Carlos Andrade',
      email: 'carlos.andrade@example.com',
      telefone: '(31) 97777-6666',
      mensagem: 'Queria mais informações sobre a cobertura moderna.',
      imovelId: 3
    }
  ];

  imoveis: Imovel[] = [
    {
      id: 1,
      nome: 'Apartamento Luxo Centro',
      cidade: 'São Paulo',
      valor: 850000,
      tipo: 'Apartamento',
      descricao: 'Apartamento de alto padrão no centro de São Paulo, com 3 quartos, suíte, varanda gourmet e 2 vagas na garagem.',
      foto: 'https://example.com/fotos/apartamento1.jpg'
    },
    {
      id: 2,
      nome: 'Casa de Praia',
      cidade: 'Florianópolis',
      valor: 1200000,
      tipo: 'Casa',
      descricao: 'Casa de frente para o mar com piscina e área de lazer completa.',
      foto: 'https://example.com/fotos/casa1.jpg'
    },
    {
      id: 3,
      nome: 'Cobertura Moderna',
      cidade: 'Belo Horizonte',
      valor: 950000,
      tipo: 'Cobertura',
      descricao: 'Cobertura duplex com jacuzzi e vista panorâmica da cidade.',
      foto: 'https://example.com/fotos/cobertura1.jpg'
    }
  ];

  mostrarForm: boolean = false;

  novoImovel: Imovel = { 
    id: 0, 
    nome: '', 
    cidade: '', 
    valor: 0, 
    tipo: '', 
    descricao: '', 
    foto: '' 
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  logout() {
    console.log('Logout realizado!');
    this.router.navigate(['/login']);
  }

  setAba(aba: 'interessados' | 'imoveis') {
    this.abaAtiva = aba;
    this.mostrarForm = false;
  }

  // Cadastrar ou atualizar imóvel
  salvarImovel() {
    if (!this.novoImovel.nome || !this.novoImovel.valor) return;

    if (this.novoImovel.id === 0) {
      const novoId = this.imoveis.length ? Math.max(...this.imoveis.map(i => i.id)) + 1 : 1;
      this.imoveis.push({ ...this.novoImovel, id: novoId });
    } else {
      const index = this.imoveis.findIndex(i => i.id === this.novoImovel.id);
      if (index > -1) this.imoveis[index] = { ...this.novoImovel };
    }

    this.novoImovel = { id: 0, nome: '', cidade: '', valor: 0, tipo: '', descricao: '', foto: '' };
    this.mostrarForm = false;
  }

  editarImovel(imovel: Imovel) {
    this.novoImovel = { ...imovel };
    this.mostrarForm = true;
  }

  excluirImovel(id: number) {
    if (confirm('Deseja realmente excluir este imóvel?')) {
      this.imoveis = this.imoveis.filter(i => i.id !== id);
    }
  }

  cadastrarNovoImovel() {
    this.novoImovel = { id: 0, nome: '', cidade: '', valor: 0, tipo: '', descricao: '', foto: '' };
    this.mostrarForm = true;
  }
}
