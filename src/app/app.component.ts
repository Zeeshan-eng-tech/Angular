import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // this module is working for
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zeeshan';
}
