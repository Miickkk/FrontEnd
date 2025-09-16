import { Component, OnInit } from '@angular/core';
import { Imoveis } from '../../../core/services/imoveis';
import { AuthService } from '../../../core/services/auth';
import { CommonModule } from '@angular/common';
import { Imovel } from '../../../core/models/imovel.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-interesses',
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-interesses.html',
  styleUrls: ['./meus-interesses.scss']
})
export class MeusInteresses implements OnInit {
  imoveisInteressados: Imovel[] = [];

  constructor(
    private imoveisService: Imoveis,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.carregarInteresses();
  }

  carregarInteresses() {
    const usuario = this.auth.usuarioAtual();
    if (!usuario) return;
  }
}