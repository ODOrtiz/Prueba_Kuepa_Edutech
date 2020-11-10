import React, { useContext } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MsgIcon from '@material-ui/icons/SpeakerNotes';

// Importaciones mias
import './AgendaHoy.css';

// Contextos
import playersContext from '../../../context/playerContext/playersContext';

const AgendaHoy = () => {

    const playersCon = useContext(playersContext);
    const { proPlayers } = playersCon;
    return (
        <div className='inline-middle-div card-page container-agenda-hoy'>
            <p className='title-agenda-hoy'>Conexiones de agenda para hoy</p>
            <div className='container-table-agenda-hoy'>
                <table className='table-container-hoy-par'>
                    <tbody className='table-agenda-hoy'>
                        <tr></tr>
                        {proPlayers.map(player => (
                            <tr key={player.account_id}>
                                <td className='width-agenda-1'>{player.name}</td>
                                <td className='width-agenda-1'>
                                    <p>Llamar</p>
                                    <p>Descuento temporada</p>
                                </td>
                                <td className='width-agenda-2'>
                                    {player.fantasy_role == 2
                                        ?
                                        <div className='cicle-orange'></div>
                                        :
                                        <div className='cicle-grey'></div>
                                    }
                                </td>
                                <td className='width-agenda-2 icon-agenda-hoy'>
                                    <PhoneIcon fontSize='small' />
                                </td>
                                <td className='width-agenda-2 icon-agenda-hoy'>
                                    <MsgIcon fontSize='small' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default AgendaHoy;