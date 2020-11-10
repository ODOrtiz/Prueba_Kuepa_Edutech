import React, { useReducer } from 'react';
import playersContext from './playersContext';
import * as types from '../types/index';

import apiClientAxios from '../../config/axios';
import { filterPlayersByRole } from '../../utils/filterPlayers';

const { default: playersReducer } = require('./playersReducer');

const PlayersState = (props) => {
    const initialState = {
        proPlayers: [],
        filterPlayers: {},
        user: {}
    };

    const [state, dispatch] = useReducer(playersReducer, initialState);

    // Obtener pro players
    const getProPlayers = async () => {
        try {
            const resp = await apiClientAxios.get('proPlayers');
            // Solo elijo los primeros 100 elementos
            const datos = resp.data.slice(0, 100);
            const filtro = filterPlayersByRole(datos);
            dispatch({
                type: types.GET_PRO_PLAYERS,
                payload: datos
            });
            dispatch({
                type: types.SAVE_FILTERED_PLAYERS,
                payload: filtro
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getPlayerById = async () => {
        try {
            const resp = await apiClientAxios.get('players/8712306');
            dispatch({
                type: types.SAVE_INFO_USER,
                payload: resp.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <playersContext.Provider
            value={{
                proPlayers: state.proPlayers,
                filterPlayers: state.filterPlayers,
                user: state.user,
                getProPlayers,
                getPlayerById
            }}
        >
            {props.children}
        </playersContext.Provider>
    )
}

export default PlayersState;
