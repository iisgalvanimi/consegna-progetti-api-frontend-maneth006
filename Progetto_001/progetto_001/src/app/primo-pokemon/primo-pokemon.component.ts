import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primo-pokemon',
  templateUrl: './primo-pokemon.component.html',
  styleUrls: ['./primo-pokemon.component.css']
})
export class PrimoPokemonComponent implements OnInit {
  card: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id')!;
    this.pokemonService.getCardById(cardId).subscribe((data) => {
      this.card = data.data[0];  // Salva i dati della carta nel componente
    });
  }

}
