import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// COMPONENTE CABEÇALHO PÚBLICO
@Component({
  selector: 'app-header-publico',
  templateUrl: './header-publico.component.html',
  styleUrls: ['./header-publico.component.scss'],
})
export class HeaderPublicoComponent implements OnInit {
  esconderHome: boolean = false;

  constructor(private router: Router) {}

  // INICIALIZAÇÃO
  ngOnInit(): void {
    this.atualizarHeader(this.router.url); 
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        const navEnd = event as NavigationEnd;
        this.atualizarHeader(navEnd.urlAfterRedirects);
      });
  }


  // ATUALIZA O CABEÇALHO
  atualizarHeader(url: string) {
    this.esconderHome = url.startsWith('/interna');
  }
}
