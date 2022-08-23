import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"people",component:PeopleComponent},
  {path:"planets",component:PlanetsComponent},
  {path:"starship",component:StarshipsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
