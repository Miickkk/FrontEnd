import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-corretor',
  standalone: true,
  imports: [RouterModule], // RouterModule já resolve os routerLink
  templateUrl: './header-corretor.component.html',
  styleUrls: ['./header-corretor.component.scss'],
})
export class HeaderCorretorComponent {}
