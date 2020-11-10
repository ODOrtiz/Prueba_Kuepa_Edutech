import React from 'react';
import faceIcon from '../../../assets/facebook_icon.png';
import wpIcon from '../../../assets/whatsapp_icon.png';
import PropTypes from 'prop-types';

// Importaciones propias
import './ItemRigthPanel.css';

const ItemRigthPanel = ({ user }) => {
    return (
        <div className='inline-top-div conatiner-item-rigth-panel'>
            {user.fantasy_role === 2 ?
                <img src={wpIcon} className='icon-item-rigth-panel' alt="" />
                : <img src={faceIcon} className='icon-item-rigth-panel' alt="" />
            }
            < div className='header-item-rigth-panel' >
                {user.fantasy_role === 2 ?
                    <p>Whatsapp</p>
                    : <p>Facebook</p>
                }
            </div >
            {user ?
                <p className='text-name-item'>{user.name}</p>
                :
                null
            }
            {user ?
                <p className='text-time-item'>6 min ago</p>
                :
                null
            }
        </div >

    );
}

// Documentacion
ItemRigthPanel.propTypes = {
    user: PropTypes.object.isRequired
}

export default ItemRigthPanel;