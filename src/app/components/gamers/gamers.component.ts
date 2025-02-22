import { Component } from '@angular/core';

@Component({
  selector: 'app-gamers',
  imports: [],
  templateUrl: './gamers.component.html',
  styleUrl: './gamers.component.css'
})
export class GamersComponent {

  title:string = "Users Component Is Here";
  users:number = 234 ;
  games:any = 109 ;
  Myclass:string = "bg-info p-5";
  myType:string = "number";
}
