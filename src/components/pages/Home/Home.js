import React, { Fragment, useEffect, useContext } from 'react';

// Importaciones propias
import './Home.css';
import LeftPanel from '../../ui/LeftPanel/LeftPanel';
import CenterPanel from '../../ui/CenterPanel/CenterPanel';
import RigthPanel from '../../ui/RigthPanel/RigthPanel';

// Contextos
import playersContext from '../../../context/playerContext/playersContext';

const Home = () => {

    const playersCon = useContext(playersContext);
    const { getProPlayers, getPlayerById } = playersCon;

    useEffect(() => {
        getProPlayers();
        getPlayerById();
    }, []);

    return (
        <Fragment>
            <LeftPanel />
            <CenterPanel />
            <RigthPanel />
        </Fragment>
    );
}

export default Home;