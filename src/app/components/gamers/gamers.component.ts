import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { response } from 'express';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-gamers',
  imports: [CommonModule,RouterModule],
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
    deleteGamer(id: number) {
      if (confirm("Hello Zeeshan, are you sure you want to delete this gamer?")) {
        let url = `https://67c0f21cb9d02a9f224b4733.mockapi.io/game/gamers/${id}`;
    
        fetch(url, { method: "DELETE" })
          .then(response => response.json())
          .then(data => {
            console.log("Deleted:", data);  // ✅ Check if deletion was successful
            this.fetchGamers();             // ✅ Fetch updated list AFTER deletion completes
          })
         .catch(error => console.error("Error deleting gamer:", error));
       }
     }
    }