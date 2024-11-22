import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoPokemonComponent } from './primo-pokemon.component';

describe('PrimoPokemonComponent', () => {
  let component: PrimoPokemonComponent;
  let fixture: ComponentFixture<PrimoPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimoPokemonComponent]
    });
    fixture = TestBed.createComponent(PrimoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
