import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { PokemonList, PokemonListItem, PokemonInfo } from '../interfaces/pokemon-api-data'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  apiBase: string = 'https://pokeapi.co/api/v2';
  pokemonApi: string = `${this.apiBase}/pokemon`;

  // Create Subjects and Observables
  pokemons$: Subject<PokemonListItem[]>;
  pokemons: Observable<PokemonListItem[]>;
  nextPokemonApi$: Subject<string | null>;
  nextPokemonApi: Observable<string | null>;
  prevPokemonApi$: Subject<string | null>;
  prevPokemonApi: Observable<string | null>;

  constructor(private http: HttpClient) {
    // Initialize Subjects and Observables
    this.pokemons$ = new Subject();
    this.pokemons = this.pokemons$.asObservable();

    this.nextPokemonApi$ = new Subject();
    this.nextPokemonApi = this.nextPokemonApi$.asObservable();

    this.prevPokemonApi$ = new Subject();
    this.prevPokemonApi = this.prevPokemonApi$.asObservable();
  }

  getPokemonList(url: string) {
    // Make API call and Set Subjects
    this.http.get(url).subscribe(pList => {
      const pokeList = pList as PokemonList;
      this.nextPokemonApi$.next(pokeList.next);
      this.prevPokemonApi$.next(pokeList.previous);
      
      // Loop Over Pokelist Urls 
      pokeList.results.forEach(pokemon => {
        this.http.get(pokemon.url).subscribe(pInfo => {
          pokemon.img = (pInfo as PokemonInfo).sprites.front_default
        })
      });

      // Set Pokemon List Subject
      this.pokemons$.next(pokeList.results);
    })
  }

  getFirstList() {
    const offset: number =  0;
    const limit: number = 25;

    // generate API Url Link
    const firstSetApiUrl: string = `${this.pokemonApi}?offset=${offset}&limit=${limit}`

    this.getPokemonList(firstSetApiUrl);
  }
}
