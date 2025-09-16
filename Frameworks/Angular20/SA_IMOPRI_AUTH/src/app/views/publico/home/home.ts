import { Component } from '@angular/core';
import { HeaderComponent} from '../../../templates/components/header/header';
import { FooterComponent } from '../../../templates/components/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [ HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
