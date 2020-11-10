import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Importaciones propias
import './LeadsStats.css';

const LeadsStats = ({ user }) => {
    // Validar
    if (user == null) user = { rank_tier: 1, leaderboard_rank: 1 };
    const percentage = Math.round(user.rank_tier * 100 / user.leaderboard_rank);

    return (
        <div className='card-page inline-top-div container-leads-stats'>
            <div className='inline-top-div container-progress-leads-stats'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({ pathColor: 'rgb(248, 129, 153)', textColor: '#000', textSize: '25px' })} />
            </div>
            <div className='inline-top-div container-text-leads-stats'>
                <div className='inline-top-div text-leads-stats'>
                    <p>Leads obtenidas</p>
                    <p>{user.rank_tier}/{user.leaderboard_rank}</p>
                </div>
                <div className='inline-top-div text-leads-stats'>
                    <p>Cola de llamados</p>
                    <p>{user.rank_tier}/{user.leaderboard_rank}</p>
                </div>
                <div className='inline-top-div text-leads-stats'>
                    <p>Leads finalizadas</p>
                    <p>{user.rank_tier}/{user.leaderboard_rank}</p>
                </div>
            </div>
        </div>
    );
}

export default LeadsStats;