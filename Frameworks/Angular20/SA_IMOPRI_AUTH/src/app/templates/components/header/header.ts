import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {}  // ⚠️ Export precisa bater com o import no App
