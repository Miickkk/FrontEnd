import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './templates/components/header/header';
import { Footer } from './templates/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'imobiliaria_prime2';
}
