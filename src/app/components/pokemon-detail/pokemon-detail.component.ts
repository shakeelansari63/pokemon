import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonInfo } from '../../models/pokemon-api-data';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetailVisible: boolean;
  pokemonName: string;
  pokemonDetail: PokemonInfo;

  constructor(private pokeService: PokeapiService) {  }

  ngOnInit(): void {
    // Reset
    this.pokemonDetail = null;

    // Subscribe to Visibility Obsevable
    this.pokeService.pokemonDetailVisible.subscribe(visibility => {
      this.pokemonDetailVisible = visibility;
    })

    // Subscribe to Pokemon Detail Data
    this.pokeService.pokemonDetail.subscribe(detail => {
      this.pokemonDetail = detail;

      this.pokemonName = detail.name;
    })
  }

}
