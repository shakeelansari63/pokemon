import { Component, Input, OnChanges } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonInfo } from '../../models/pokemon-api-data';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() pokemonId: number;
  pokemonDetailVisible: boolean;
  pokemonName: string;
  pokemonDetail: PokemonInfo;

  constructor(private pokeService: PokeapiService) { 
    this.pokeService.pokemonDetailVisible.subscribe(visibility => {
      this.pokemonDetailVisible = visibility;
    })
  }

  ngOnChanges(): void {
    // Reset
    this.pokemonDetail = null;

    // get detail form server
    this.pokeService.getPokemonByIdOrName(this.pokemonId);

    this.pokeService.pokemonDetail.subscribe(detail => {
      this.pokemonDetail = detail;

      this.pokemonName = detail.name;
    })
  }

}
