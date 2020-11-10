import React, { useContext } from 'react';

// Importaciones propias
import './PlanHoy.css';
import ItemPlanHoy from '../ItemPlanHoy/ItemPlanHoy';

// Contextos
import playersContext from '../../../context/playerContext/playersContext';

const PlanHoy = () => {

    const playersCon = useContext(playersContext);
    let { filterPlayers } = playersCon;
    if (filterPlayers == undefined) filterPlayers = { none: 0, core: 0, support: 0 };
    const color1 = '-webkit-linear-gradient(90deg, rgba(131,180,251,1) 0%, rgba(143,169,249,1) 35%, rgba(164,140,245,1) 100%)';
    const color2 = '-webkit-linear-gradient(90deg, rgba(112,246,212,1) 0%, rgba(59,173,168,1) 35%, rgba(8,131,150,1) 100%)';
    const color3 = '-webkit-linear-gradient(90deg, rgba(236,100,124,1) 0%, rgba(214,121,156,1) 35%, rgba(157,86,134,1) 100%)';

    return (
        <div className='container-plan-hoy'>
            <p className='title-plan-hoy'>Tu plan de hoy</p>
            <p className='goto-gestion-llamadas'>Ir a la gestión de llamadas {">"} </p>
            <ItemPlanHoy colorSquare={color1} calls={filterPlayers.none} msgs={filterPlayers.support} title='Leads de primer contacto' />
            <ItemPlanHoy colorSquare={color2} calls={filterPlayers.core} msgs={filterPlayers.support} title='Leads por confirmar cita' />
            <ItemPlanHoy colorSquare={color3} calls={filterPlayers.none} msgs={filterPlayers.core} title='Leads de último intento' />
        </div>
    );
}

export default PlanHoy;