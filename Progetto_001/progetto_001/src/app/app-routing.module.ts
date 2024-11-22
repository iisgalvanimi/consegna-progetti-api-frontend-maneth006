import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoPokemonComponent } from './primo-pokemon/primo-pokemon.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'card/:id', component: PrimoPokemonComponent },  // Ruta per la carta Pokémon
  { path: '', component: AppComponent }  // Ruta per la lista delle carte
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
