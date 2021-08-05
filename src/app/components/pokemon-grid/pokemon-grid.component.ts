import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonList, PokemonListItem } from '../../interfaces/pokemon-api-data'

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  pokeList: PokemonListItem[] = [];

  constructor(private pokeService: PokeapiService) { 
    // Subscribe to Pokemon Service Observables
    this.pokeService.pokemons.subscribe(pList => {
      this.pokeList = pList;
    })
  }

  ngOnInit(): void {
    // Call first Set
    this.pokeService.getFirstList();
  }

}
