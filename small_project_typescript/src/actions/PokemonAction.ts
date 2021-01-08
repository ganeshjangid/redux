import { Dispatch } from "redux";
import * as actionType from "./PokemonTypes";
import { PokemonDispatchType } from "./PokemonTypes";
import axios from "axios";
export const getPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchType>
) => {
  try {
    dispatch({
      type: actionType.POKEMON_LOADING,
    });
    const respAPI = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    dispatch({
      type: actionType.POKEMON_SUCCESS,
      payload: respAPI.data,
    });
  } catch (e) {
    dispatch({
      type: actionType.POKEMON_FAILED,
    });
  }
};
