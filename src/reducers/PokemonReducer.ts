import { PokemonType, PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from '../actions/PokemonActionType';

interface DefaultStateI {
    loading: boolean,
    pokemon?: PokemonType
}

const defaultState = {
    loading: false
};

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading: false,
            }
        case POKEMON_LOADING:
            return {
                loading: true,
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        default:
            return state;
    }
}

export default pokemonReducer;
