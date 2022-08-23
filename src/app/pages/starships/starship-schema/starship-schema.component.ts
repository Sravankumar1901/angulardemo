import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-schema',
  templateUrl: './starship-schema.component.html',
  styleUrls: ['./starship-schema.component.css']
})
export class StarshipSchemaComponent implements OnInit {
  @Input() starshipsInfo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
