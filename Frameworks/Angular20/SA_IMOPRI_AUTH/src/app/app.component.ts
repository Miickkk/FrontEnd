import { Component } from '@angular/core';
import { HeaderComponent } from './templates/components/header/header';
import { FooterComponent } from './templates/components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {}
