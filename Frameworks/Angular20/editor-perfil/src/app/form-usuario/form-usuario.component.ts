import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent {
  //atributos
  nome: string = '';
  email: string = '';
  telefone: string = '';
  genero: string = '';
  idade: number | null = null;
  profissao: string = '';

  //métodos
  limparDados() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.genero = '';
    this.idade = null;
    this.profissao = '';
  }

  // método para validar os campos do formulároio
  validarFormulario(): string[] {
    const erros: string[] = [];
    //validação do nome
    if (!this.nome.trim()) {
      // se nove vazio
      erros.push('O Nome é Obrigatório');
    }
    //validação do email
    if (!this.email.trim()) {
      erros.push('O email é obrigatório');
    } else if (!this.email.includes('@')) {
      erros.push('Emial Inválido');
    }

    return erros;
  }

  enviarFormulario() {
    const erros = this.validarFormulario();

    if (erros.length > 0) {
      alert('Erros no Formulário:\n' + erros.join('\n'));
      return;
    }
    this.limparDados();
    alert('Formulário Enviado com Sucesso!');
  }
}
