import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carta2 } from './carta2.model';

@Component({
  selector: 'app-carta2',
  templateUrl: './carta2.component.html',
  styleUrls: ['./carta2.component.css']
})
export class Carta2Component {
  c2Dati: carta2 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getBlastoiseCard(); 
  }

 
  getBlastoiseCard(): void {
    this.http.get<{ data: carta2[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Blastoise' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.c2Dati = response.data[0];  
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
