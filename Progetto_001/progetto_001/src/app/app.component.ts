import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService.getCards().subscribe((data) => {
      this.cards = data.data;  // Salva la lista delle carte
    });
  }

  viewCard(id: string): void {
    this.router.navigate(['/card', id]);  // Naviga alla vista della carta selezionata
  }
}

