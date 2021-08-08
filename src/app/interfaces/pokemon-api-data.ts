export interface PokemonListItem {
    name: string;
    url: string;
    img?: string | null;
    id?: number | null;
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

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Move {
    move: {
        name: string;
        url: string;
    },
    version_group_details: [];
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
    moves: Move[];
    name: string;
    past_types: [];
    species: any;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}