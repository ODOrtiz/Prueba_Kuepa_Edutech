import React, { useContext, useState, useEffect } from 'react';

// Importaciones propias
import './RigthPanel.css';
import '../ItemRigthPanel/ItemRigthPanel';
import ItemRigthPanel from '../ItemRigthPanel/ItemRigthPanel';

// Contextos 
import playersContext from '../../../context/playerContext/playersContext';

const RigthPanel = () => {

    const playersCon = useContext(playersContext);
    const { proPlayers } = playersCon;

    // Control del panel 
    const [open, updateOpen] = useState(false);
    const [widthScreen, updateWidth] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(document.documentElement.clientWidth);
        });
        setWidth(document.documentElement.clientWidth);
        // eslint-disable-next-line
    }, []);

    const setWidth = (widthScreen) => {
        if (widthScreen < 1400) {
            updateWidth(true);
        } else {
            updateWidth(false);
        }
    }

    const handleClick = () => {
        if (widthScreen) {
            updateOpen(!open);
        }
    }

    const styleOpen = { width: 135, transition: 'all 0.2s ease', borderRadiusLeftTop: 40, borderRadiusLeftBottom: 40, zIndex: 20 };
    const styleClose = { width: 25, transition: 'all 0.2s ease', zIndex: 20 };
    const styleCloseItems = { display: 'none' };

    return (
        <div style={widthScreen ? open ? styleOpen : styleClose : null} className='inline-top-div home-right-panel bg-color-primary'>
            <div className='container-rigth-panel'>
                <div onClick={handleClick} className='inline-top-div vertical-line-panel'>
                </div>
                <div style={widthScreen ? open ? null : styleCloseItems : null} className='inline-top-div conatiner-items-rigth-panel'>
                    {proPlayers.map(player => (
                        <ItemRigthPanel key={player.account_id} user={player} />
                    ))
                    }
                </div>

            </div>
        </div>

    );
}

export default RigthPanel;