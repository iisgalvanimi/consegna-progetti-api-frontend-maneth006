import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { animals, Emoji, fruits } from '../modello';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  genVect : Emoji[]= [{name:"", emoji:""}];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log (uri_param); //Stampo su console
      //this.service.getTrack()
      if (uri_param == 'fruits') this.genVect = fruits;
      if (uri_param == 'animals') this.genVect = animals;

    }

}
