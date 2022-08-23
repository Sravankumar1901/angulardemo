import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { PersonComponent } from './pages/people/person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetschemaComponent } from './pages/planets/planetschema/planetschema.component';
import { StarshipSchemaComponent } from './pages/starships/starship-schema/starship-schema.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PersonComponent,
    PlanetschemaComponent,
    StarshipSchemaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
