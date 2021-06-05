import React from 'react';
import './index.css';

import Table from '../assets/icons/iconsFilter/table.svg';
import PaperPlane from '../assets/icons/iconsFilter/paper-plane.svg';
import PlayCircle from '../assets/icons/iconsFilter/play-circle.svg';
import Pen from '../assets/icons/iconsFilter/pen.svg';
import Bed from '../assets/icons/iconsFilter/bed.svg';
import Check from '../assets/icons/iconsFilter/check.svg';


const FilterJourney = () => {

    // let filter = ["Todos", "Em execução", "Ativa", "Configurando", "Ociosa", "Concluída"];
    // let quantidade = new Array(6);
    // let array = [true, false, false, false, false, false];

    return (
    <div className="filterMenu">
        <h1>Jornadas</h1>
        <div className="filterList">
           
        </div>
    </div>
    )
}

function contentFilter() {
    let icons = [Table, PaperPlane, PlayCircle, Pen, Bed, Check];
    
    fetch("https://api-d1-test.herokuapp.com/api/filter").then(r => {
        return r.json(); 
    }).then(jasonFilter => {
        for(let i = 0; i < jasonFilter.length; i++) {
            document.querySelector(".filterList").innerHTML += `
            <div>   
                 <h4>${jasonFilter[i].name}</h4>
                     <img src=${icons[i]} />
                     <p>${jasonFilter[i].quantity}</p>
                </div>
                `
        }
        })
    }

    contentFilter();
export default FilterJourney;