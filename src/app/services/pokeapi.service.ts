import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { PokemonList, PokemonListItem, PokemonInfo } from '../models/pokemon-api-data'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  apiBase: string = 'https://pokeapi.co/api/v2';
  pokemonApi: string = `${this.apiBase}/pokemon`;

  // Create Subjects and Observables
  allPokemons$: Subject<PokemonListItem[]>;
  allPokemons: Observable<PokemonListItem[]>;
  allPokemonsCount: number;

  pokemons$: Subject<PokemonListItem[]>;
  pokemons: Observable<PokemonListItem[]>;

  pokemonDetail$: Subject<PokemonInfo>
  pokemonDetail: Observable<PokemonInfo>;

  pokemonDetailVisible$: Subject<boolean>;
  pokemonDetailVisible: Observable<boolean>;

  pokemonDetailNameId$: Subject<number | string>;
  pokemonDetailNameId: Observable<number | string>;

  nextPokemonApi: string;
  prevPokemonApi: string;

  constructor(private http: HttpClient) {
    // Initialize Subjects and Observables
    this.allPokemons$ = new Subject();
    this.allPokemons = this.allPokemons$.asObservable();

    this.pokemons$ = new Subject();
    this.pokemons = this.pokemons$.asObservable();

    this.pokemonDetail$ = new Subject();
    this.pokemonDetail = this.pokemonDetail$.asObservable();

    this.pokemonDetailVisible$ = new Subject();
    this.pokemonDetailVisible = this.pokemonDetailVisible$.asObservable();

    this.pokemonDetailNameId$ = new Subject();
    this.pokemonDetailNameId = this.pokemonDetailNameId$.asObservable();
  }

  generatePokemonList(url: string) {
    // Error Handling 
    if (! url) {
      return;
    }
    // Make API call and Set Subjects
    this.http.get(url).subscribe(pList => {
      const pokeList = pList as PokemonList;
      this.nextPokemonApi = pokeList.next;
      this.prevPokemonApi = pokeList.previous;
      
      // Loop Over Pokelist Urls 
      pokeList.results.forEach(pokemon => {
        this.http.get(pokemon.url).subscribe(pInfo => {
          pokemon.img = (pInfo as PokemonInfo).sprites.front_default
          pokemon.id = (pInfo as PokemonInfo).id
        })
      });

      // Set Pokemon List Subject
      this.pokemons$.next(pokeList.results);
    })
  }

  getAllPokemons() {
    this.http.get(`${this.pokemonApi}?limit=5000`).subscribe(pokeList => {
      this.allPokemons$.next((pokeList as PokemonList).results);

      this.allPokemonsCount = (pokeList as PokemonList).results.length;
    }) 

    return this.allPokemons;
  }

  generateFirstList() {
    const offset: number =  0;
    const limit: number = 30;

    // generate API Url Link
    const firstSetApiUrl: string = `${this.pokemonApi}?offset=${offset}&limit=${limit}`

    this.generatePokemonList(firstSetApiUrl);
  }

  generateNextPage() {
    this.generatePokemonList(this.nextPokemonApi)
  }

  generatePrevPage() {
    this.generatePokemonList(this.prevPokemonApi)
  }

  generatePokemonByIdOrName(name_or_id: string | number) {
    // Get data form API
    this.http.get(`${this.pokemonApi}/${name_or_id}`).subscribe(pokeData => {
      this.pokemonDetail$.next(pokeData as PokemonInfo);

      // Make the Detail View visible
      this.pokemonDetailVisible$.next(true);
    })
  }

  searchPokemon(name_or_id: string | number) {
    // Do nothing if name or id is empty
    if (!name_or_id) { return }

    // Search for pokemon

    this.generatePokemonByIdOrName(name_or_id)
  }

  getPrevUrl() {
    return this.prevPokemonApi;
  }

  getNextUrl() {
    return this.nextPokemonApi;
  }

  generateLastList() {
    const limit: number = 30;
    const offset: number =  (Math.floor(this.allPokemonsCount / 30)) * 30 ;

    // generate API Url Link
    const lastSetApiUrl: string = `${this.pokemonApi}?offset=${offset}&limit=${limit}`

    this.generatePokemonList(lastSetApiUrl);
  }
}
