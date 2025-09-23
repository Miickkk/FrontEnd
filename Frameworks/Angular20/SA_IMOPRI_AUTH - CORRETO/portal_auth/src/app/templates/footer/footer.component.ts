import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTE RODAPÉ
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,      // torna o componente standalone
  imports: [CommonModule] // necessário para diretivas como *ngIf, *ngFor
})
export class FooterComponent {}
