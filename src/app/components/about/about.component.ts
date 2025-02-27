import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(){
    this.abc();
  }
   title: string = "about component";
   today: any = new Date ();
   price: any = 200;
   abc (){
    console.log('cartoon')
   }
}
