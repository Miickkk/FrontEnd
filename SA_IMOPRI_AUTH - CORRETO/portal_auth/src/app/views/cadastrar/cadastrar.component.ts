import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// IMPORTE seus componentes standalone
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
    HttpClientModule,          // necessário para HttpClient
    RouterModule,              // necessário para <router-outlet>
    HeaderCorretorComponent,   // necessário para <app-header-corretor>
    FooterComponent            // necessário para <app-footer>
  ]
})
export class CadastrarComponent {
  imovelForm: FormGroup;

  private apiUrl = 'http://localhost:3004/imoveis';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.imovelForm = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      categoria: ['Casa', Validators.required],
      cidade: ['', Validators.required],
      descricao: [''],
      valor: ['', Validators.required],
    });
  }

  cadastrarImovel() {
    if (this.imovelForm.valid) {
      const novoImovel = this.imovelForm.value;

      this.http.post(this.apiUrl, novoImovel).subscribe({
        next: () => {
          alert('✅ Imóvel cadastrado com sucesso!');
          this.imovelForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar imóvel:', err);
          alert('❌ Erro ao cadastrar imóvel');
        }
      });
    } else {
      alert('⚠️ Preencha todos os campos obrigatórios.');
    }
  }
}
