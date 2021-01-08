import {
  PokemonType,
  PokemonDispatchType,
  POKEMON_LOADING,
  POKEMON_FAILED,
  POKEMON_SUCCESS,
} from "../actions/PokemonTypes";

interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
}
const defaultState: DefaultStateI = {
  loading: false,
};

const pokemonReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchType
): DefaultStateI => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        loading: false,
      };
    case POKEMON_FAILED:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
      break;
  }
};

export default pokemonReducer;
