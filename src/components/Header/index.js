import React from 'react';
import './index.css';
import Logotipo from '../assets/images/acme-logo.png';
import Plus from '../assets/icons/plus.svg';
import { Tooltip } from '@material-ui/core';

const Header = () => {
    return (
    <div className="header">
            <Tooltip title="Add" placement="right" arrow><p>A</p></Tooltip>
        <img src={Logotipo} alt="Logotipo do projeto acme" />
        <div className="search">
            {/* <img src={searchIcon} /> */}
            <input type="text" placeholder="Buscar" name="searchInput" />
            <button id="btnSearch">
                <img src={Plus} alt="Icone do botão de pesquisa - Projeto Acme" />Nova Jornada
            </button>
        </div>
    </div>
    )
}

export default Header;