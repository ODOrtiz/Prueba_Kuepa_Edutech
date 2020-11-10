import React from 'react';

// Importaciones propias
import './MetaGrupal.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const MetaGrupal = () => {
    const backGroundProgress = '-webkit-linear-gradient(left,rgb(248, 129, 153) 0%, rgb(252, 160, 112)';
    return (
        <div className='card-page inline-top-div container-meta-grupal'>
            <p className='title-meta-grupal'>Meta grupal</p>
            <ProgressBar title='Leads obtenidos' progress='200/400' width='95%' background={backGroundProgress} />
            <ProgressBar title='Matriculas realizadas' progress='50/100' width='95%' background={backGroundProgress} />
        </div>
    );
}

export default MetaGrupal;