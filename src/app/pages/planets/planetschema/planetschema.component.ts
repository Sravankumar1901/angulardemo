import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetschema',
  templateUrl: './planetschema.component.html',
  styleUrls: ['./planetschema.component.css']
})
export class PlanetschemaComponent implements OnInit {
  @Input() planetInfo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
