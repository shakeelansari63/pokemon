import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonList, PokemonListItem } from '../../models/pokemon-api-data'

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  pokeList: PokemonListItem[] = [];
  pokemonId: number | string;
  pokemonName: string;
  loadingVisible: boolean;

  constructor(public pokeService: PokeapiService) { 
    // Subscribe to Pokemon Service Observables
    this.pokeService.pokemons.subscribe(pList => {
      this.pokeList = pList;
    })

    // Subscribe to pokemon Visible observable
    this.pokeService.loadingVisible.subscribe(visibility => {
      this.loadingVisible = visibility;
    })
  }

  ngOnInit(): void {
    // Call first Set
    this.pokeService.generateFirstList();
  }

  navigateNext() {
    this.pokeService.generateNextPage()
  }

  navigatePrev() {
    this.pokeService.generatePrevPage()
  }

  navigateFirst() {
    this.pokeService.generateFirstList()
  }

  navigateLast() {
    this.pokeService.generateLastList()
  }

  displayPokemonDetail(name_or_id: string | number) {
    this.pokemonId = name_or_id
    this.pokeService.searchPokemon(name_or_id)
  }

  get prevUrl() {
    return this.pokeService.getPrevUrl()
  }

  get nextUrl() {
    return this.pokeService.getNextUrl()
  }

}
