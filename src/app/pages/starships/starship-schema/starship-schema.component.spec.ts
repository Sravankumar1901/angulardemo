import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipSchemaComponent } from './starship-schema.component';

describe('StarshipSchemaComponent', () => {
  let component: StarshipSchemaComponent;
  let fixture: ComponentFixture<StarshipSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
