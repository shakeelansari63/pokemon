import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service'
import { PokemonListItem } from '../../models/pokemon-api-data'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pokemons: string[] = [];
  searchPokename: string = '';

  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
    // get list of all pokemons on initialization
    this.pokeService.getAllPokemons().subscribe(pokemons => {
      pokemons.forEach(pokemon => {
        this.pokemons.push(pokemon.name)
      })
    })
  }

  // Function to Search Pokemon
  searchPokemon() {
    this.pokeService.searchPokemon(this.searchPokename)
  }

}
