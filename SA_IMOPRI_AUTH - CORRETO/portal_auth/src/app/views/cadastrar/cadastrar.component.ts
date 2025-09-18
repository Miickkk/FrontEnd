import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

// Importando componentes standalone
import { HeaderCorretorComponent } from '../../templates/header-corretor/header-corretor.component';
import { FooterComponent } from '../../templates/footer/footer.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderCorretorComponent,
    FooterComponent
  ]
})
export class CadastrarComponent implements OnInit {
  imovelForm: FormGroup;
  private apiUrl = 'http://localhost:3004/imoveis';
  isEditMode = false;
  imovelId: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.imovelForm = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      categoria: ['Casa', Validators.required],
      cidade: ['', Validators.required],
      descricao: [''],
      valor: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Verifica se o Router passou um imóvel para edição
    const estado = history.state.imovel;
    if (estado) {
      this.isEditMode = true;
      this.imovelId = estado.id;
      this.imovelForm.patchValue({
        id: estado.id,
        titulo: estado.titulo,
        categoria: estado.categoria,
        cidade: estado.cidade,
        descricao: estado.descricao,
        valor: estado.valor
      });
    }
  }

  cadastrarImovel() {
    if (!this.imovelForm.valid) {
      alert('⚠️ Preencha todos os campos obrigatórios.');
      return;
    }

    const imovelDados = this.imovelForm.value;

    if (this.isEditMode) {
      // Atualiza imóvel existente
      this.http.put(`${this.apiUrl}/${this.imovelId}`, imovelDados).subscribe({
        next: () => {
          alert('✅ Imóvel atualizado com sucesso!');
          this.router.navigate(['/meus-imoveis']);
        },
        error: (err) => {
          console.error('❌ Erro ao atualizar imóvel:', err);
          alert('❌ Erro ao atualizar imóvel');
        }
      });
    } else {
      // Cadastra novo imóvel
      this.http.post(this.apiUrl, imovelDados).subscribe({
        next: () => {
          alert('✅ Imóvel cadastrado com sucesso!');
          this.router.navigate(['/meus-imoveis']);
        },
        error: (err) => {
          console.error('❌ Erro ao cadastrar imóvel:', err);
          alert('❌ Erro ao cadastrar imóvel');
        }
      });
    }
  }
}
