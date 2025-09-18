import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Interessado } from 'src/app/models/interessado.model';
import { InteressadosService } from 'src/app/services/interessados.service';
import { HeaderCorretorComponent } from 'src/app/templates/header-corretor/header-corretor.component';
import { FooterComponent } from 'src/app/templates/footer/footer.component';

@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderCorretorComponent, FooterComponent]
})
export class InteressadosComponent implements OnInit {

  public interessados: Interessado[] = [];
  public interessadoForm: FormGroup;
  public idEditando: number | null = null;

  @ViewChild('formSection') formSection!: ElementRef;

  constructor(
    private _interessadosService: InteressadosService,
    private fb: FormBuilder
  ) {
    // Inicializa o formulário reativo
    this.interessadoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      mensagem: [''],
      imovelId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarInteressados();
  }

  // Listar interessados
  listarInteressados() {
    this._interessadosService.getInteressados().subscribe(res => {
      this.interessados = res.map(interessado => Interessado.fromMap(interessado));
    });
  }

}
