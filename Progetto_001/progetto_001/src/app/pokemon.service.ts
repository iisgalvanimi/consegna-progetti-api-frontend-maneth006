import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://api.pokemontcg.io/v2/cards';  

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  
  }
  
  getCardById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  
  }
}

