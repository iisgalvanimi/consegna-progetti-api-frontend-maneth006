import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carta3 } from './carta3.model';

@Component({
  selector: 'app-carta3',
  templateUrl: './carta3.component.html',
  styleUrls: ['./carta3.component.css']
})
export class Carta3Component {
  c3Dati: carta3 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getPikachuCard(); 
  }

 
  getPikachuCard(): void {
    this.http.get<{ data: carta3[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Pikachu' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.c3Dati = response.data[0];  
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
