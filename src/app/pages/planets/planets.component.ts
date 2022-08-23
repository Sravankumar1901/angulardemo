import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  data:any;
  planet:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadPlanet(1)

  }

  loadPlanet(page:number){
    this.http
    .get(`https://swapi.dev/api/planets/?page=${page}`)
    .subscribe((res:any)=>{
      this.data=res;
      this.planet=res.results;
      console.log(this.planet);
    })
  }

}
