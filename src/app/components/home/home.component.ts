import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isVisible = true;
  clicked(){
    this.isVisible = false;
  }
  clickAgain() {
    this.isVisible = true;
  }
  clicker() {
    if(this.isVisible == true){
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
}