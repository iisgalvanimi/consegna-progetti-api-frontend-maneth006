import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { carta1 } from './carta1.model';


@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  
  c1Dati: carta1 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCharizardCard(); 
  }

 
  getCharizardCard(): void {
    this.http.get<{ data: carta1[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Charizard' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.c1Dati = response.data[0];  
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
