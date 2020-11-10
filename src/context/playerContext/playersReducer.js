import * as types from '../types';

export default (state, action) => {
    switch (action.type) {
        case types.GET_PRO_PLAYERS:
            return {
                ...state,
                proPlayers: action.payload
            }
        case types.SAVE_FILTERED_PLAYERS:
            return {
                ...state,
                filterPlayers: action.payload
            }
        case types.SAVE_INFO_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return { ...state };
    }
}