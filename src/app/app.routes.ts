import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GamersComponent } from './components/gamers/gamers.component';
import { ContactComponent } from "./components/contact/contact.component";
import { EditGamerComponent } from './components/edit-gamer/edit-gamer.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'gamers',
        component:GamersComponent
    },
    {
        path:'edit.id',
        component:EditGamerComponent    
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
