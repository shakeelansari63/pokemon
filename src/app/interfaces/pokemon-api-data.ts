export interface PokemonListItem {
    name: string;
    url: string;
    img?: string | null;
}

export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

interface Sprites {
    back_default: string |null;
    back_female: string |null;
    back_shiny: string |null;
    back_shiny_female: string |null;
    front_default: string |null;
    front_female: string |null;
    front_shiny: string |null;
    front_shiny_female: string |null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        },
        "official-artwork" : {
            front_default: string | null;
        }
    },
    versions: any;
}

export interface PokemonInfo {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    past_types: [];
    species: any;
    sprites: Sprites;
    stats: [];
    types: [];
    weight: number;
}