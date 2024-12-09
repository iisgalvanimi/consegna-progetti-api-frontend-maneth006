import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carta4 } from './carta4.model';

@Component({
  selector: 'app-carta4',
  templateUrl: './carta4.component.html',
  styleUrls: ['./carta4.component.css']
})
export class Carta4Component {
  c4Dati: carta4 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getMewtwoCard(); 
  }

 
  getMewtwoCard(): void {
    this.http.get<{ data: carta4[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Mewtwo' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.c4Dati = response.data[0];  
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
