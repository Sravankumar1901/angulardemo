import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  data:any;
  starship:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

   this.loadShips(1)

  }




  loadShips(page:number){
    this.http
    .get(`https://swapi.dev/api/starships/?page=${page}`)
    .subscribe((res:any)=>{
      this.data=res;
      this.starship=res.results;
      console.log(this.starship);
    })
  }


}

