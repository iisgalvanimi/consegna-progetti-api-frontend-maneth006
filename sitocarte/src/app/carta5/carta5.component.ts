import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carta5 } from './carta5.model';

@Component({
  selector: 'app-carta5',
  templateUrl: './carta5.component.html',
  styleUrls: ['./carta5.component.css']
})
export class Carta5Component {
  c5Dati: carta5 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getDragoniteCard(); 
  }

 
  getDragoniteCard(): void {
    this.http.get<{ data: carta5[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Dragonite' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.c5Dati = response.data[0];  
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true; 
      }
    });
  }
}
