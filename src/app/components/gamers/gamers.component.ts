import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-gamers',
  imports: [CommonModule],
  templateUrl: './gamers.component.html',
  styleUrl: './gamers.component.css'
})
export class GamersComponent {

constructor(){
  this.fetchGamers();
}

  title:string = "Users Component Is Here";
  users:number = 234 ;
  games:any = 109 ;
  Myclass:string = "bg-info p-5";
  myType:string = "number";
  gamers:any = [];
  fetchGamers() {
    fetch("https://67c0f21cb9d02a9f224b4733.mockapi.io/game/gamers")
      .then(response => response.json())
      .then(data => {
        this.gamers = data;
        console.log(this.gamers); // ✅ Now this logs the correct data
      })
      .catch(error => console.error("Error fetching gamers:", error)); // Handle fetch errors
  }
}