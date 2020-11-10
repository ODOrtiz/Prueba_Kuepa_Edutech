import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';

// Importaciones propias
import './CenterPanel.css';
import LeadsStats from '../LeadsStats/LeadsStats';
import MetaGrupal from '../MetaGrupal/MetaGrupal';
import AgendaHoy from '../AgendaHoy/AgendaHoy';
import PlanHoy from '../PlanHoy/PlanHoy';

// Contextos
import playersContext from '../../../context/playerContext/playersContext';

const CenterPanel = () => {

    const playersCon = useContext(playersContext);
    let { user } = playersCon;
    if (user.profile == undefined) user = { profile: { name: '' }, rank_tier: 0, leaderboard_rank: 0 };

    return (
        <div className='inline-top-div home-center-panel bg-color-primary'>
            <div className='container-center-panel'>
                <input className='input-search' type="text" placeholder='Search' />
                <h1>Hola, {user.profile.name}</h1>
                <LeadsStats user={user} />
                <MetaGrupal />
                <div>
                    <AgendaHoy />
                    <PlanHoy />
                </div>
            </div>
        </div>
    );
}

export default CenterPanel;