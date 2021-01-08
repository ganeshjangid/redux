export const POKEMON_LOADING = "Pokemon Loading..";
export const POKEMON_FAILED = "Pokemon Failed";
export const POKEMON_SUCCESS = "Pokemon Success";

export type PokemonType = {
  abilities: PokemonAbility[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
export interface pokemonLoading {
  type: typeof POKEMON_LOADING;
}

export interface pokemonFailed {
  type: typeof POKEMON_FAILED;
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}

export type PokemonDispatchType =
  | PokemonSuccess
  | pokemonLoading
  | pokemonFailed;
