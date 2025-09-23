import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

// Importando os componentes standalone
import { HeaderCorretorComponent } from '../../templates/header-corretor/header-corretor.component';
import { FooterComponent } from '../../templates/footer/footer.component';

@Component({
  selector: 'app-meus-imoveis',
  templateUrl: './meus-imoveis.component.html',
  styleUrls: ['./meus-imoveis.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HeaderCorretorComponent,
    FooterComponent
  ]
})
export class MeusImoveisComponent implements OnInit {
  meusImoveis: any[] = [];
  private apiUrl = 'http://localhost:3004/imoveis'; // endpoint do backend

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.carregarImoveis();
  }

  carregarImoveis() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.meusImoveis = data;
      },
      error: (err) => {
        console.error('Erro ao carregar imóveis:', err);
      }
    });
  }

  // Redireciona para a página de edição (você pode criar uma rota /editar/:id)
  editarImovel(imovel: any) {
    this.router.navigate(['/cadastrar'], { state: { imovel } });
  }

  // Deleta o imóvel
  excluirImovel(id: number) {
    if (confirm('Tem certeza que deseja excluir este imóvel?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          alert('Imóvel excluído com sucesso!');
          this.carregarImoveis(); // Recarrega a lista
        },
        error: (err) => {
          console.error('Erro ao excluir imóvel:', err);
          alert('Erro ao excluir imóvel');
        }
      });
    }
  }
}
