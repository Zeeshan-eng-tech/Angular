import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-gamer',
  imports: [],
  templateUrl: './edit-gamer.component.html',
  styleUrl: './edit-gamer.component.css'
})
export class EditGamerComponent {
  studentId: any = null;
  constructor( private route:ActivatedRoute){
   this.fetchUser();
  }
  ngOnInit(){
    this.gamerId = this.route.snapshot.paramMap.get('id');
    console.log('Hello Zeeshan')
  }
  fetchUser(){
   let url = 'https://67c0f21cb9d02a9f224b4733.mockapi.io/game/gamers/${this.gamerId}' 
   fetch(url)
   .then(response => response.json)
   .then(data => console.log(data));
   
  }
}