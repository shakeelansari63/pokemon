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
  @Input() pokemonName: string;
  @Input() pokemonDetailVisible: boolean;

  pokemonDetail: PokemonInfo;

  constructor(private pokeService: PokeapiService) { }

  ngOnChanges(): void {
    // Reset
    this.pokemonDetail = null;

    // get detail form server
    this.pokeService.getPokemonById(this.pokemonId);

    this.pokeService.pokemonDetail.subscribe(detail => {
      this.pokemonDetail = detail;
    })
  }

}
