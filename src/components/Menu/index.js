import React from 'react';
import './index.css'
import Logo from '../assets/images/logotipo.png';
import ChartPie from '../assets/icons/iconsMenu/chart-pie.svg';
import Rocket from '../assets/icons/iconsMenu/rocket.svg';
import UserFriends from '../assets/icons/iconsMenu/user-friends.svg';
import Cloud from '../assets/icons/iconsMenu/ccm-cloud.svg';
import ExternalLink from '../assets/icons/iconsMenu/external-link-square-alt.svg';
import GemSolid from '../assets/icons/iconsMenu/gem-solid.svg';
import Tools from '../assets/icons/iconsMenu/tools.svg';
import Exchange from '../assets/icons/iconsMenu/exchange-alt.svg';
import SignOut from '../assets/icons/iconsMenu/sign-out-alt.svg';
import Tooltip from '@material-ui/core/Tooltip';

// import Bed from '../assets/icons/iconsMenu/bed.svg';


const Menu = () => {
   return (
       <div className="menu">
           <div className="borderGradient">
            <ul className="linksMenu">

            <Tooltip title="Add" placement="right" arrow>
           <li className="logo"><img src={Logo} alt="Logo da empresa D1" /></li>
           </Tooltip>

           <Tooltip title="Add" placement="right" arrow>
            <li><img src={ChartPie} alt="Icone, gráfico de pizza" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
            <li><img src={Rocket} alt="Icone de foguete D1" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
            <li><img src={UserFriends} alt="Icone de amizade D1" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
            <li><img src={Cloud} alt="Icone de Nuvem" /></li>
           </Tooltip>

           
            <li><hr /></li> 
            <Tooltip title="Add" placement="right" arrow>
            <li><img src={ExternalLink} alt="Icone de link externo" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
                <li className="lastLinks"><img src={GemSolid} alt="Icone de diamante premium" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
                <li><img src={Tools} alt="Icone de Configuração" /></li>
           </Tooltip>

            <Tooltip title="Add" placement="right" arrow>
                <li><img src={Exchange} alt="Icone de transações" /></li>
           </Tooltip>
           
            <Tooltip title="Add" placement="right" arrow>
                <li><img src={SignOut} alt="Icone de Saída" /></li>
           </Tooltip>
            </ul>
       </div>
       </div>
   )
}

// function LinksMenu(props) {
//     return (
//         <ul className="linksMenu">
//             {props.links.map(link => {
//                 return(
//                     <li>{link}
//                     <img src={Logo} /></li>
//                 )
//             })}
//         </ul>
//     )
// }

export default Menu;
