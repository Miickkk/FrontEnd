import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-publico',
  templateUrl: './header-publico.component.html',
  styleUrls: ['./header-publico.component.scss'],
})
export class HeaderPublicoComponent implements OnInit {
  esconderHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.atualizarHeader(this.router.url); // inicial
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        const navEnd = event as NavigationEnd;
        this.atualizarHeader(navEnd.urlAfterRedirects);
      });
  }

  atualizarHeader(url: string) {
    // Esconde Home e outros links quando a rota é /interna
    this.esconderHome = url.startsWith('/interna');
  }
}
