import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetschemaComponent } from './planetschema.component';

describe('PlanetschemaComponent', () => {
  let component: PlanetschemaComponent;
  let fixture: ComponentFixture<PlanetschemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetschemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
