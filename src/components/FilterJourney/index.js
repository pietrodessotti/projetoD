import React from 'react';
import './index.css';

import Table from '../assets/icons/iconsFilter/table.svg';
import PaperPlane from '../assets/icons/iconsFilter/paper-plane.svg';
import PlayCircle from '../assets/icons/iconsFilter/play-circle.svg';
import Pen from '../assets/icons/iconsFilter/pen.svg';
import Bed from '../assets/icons/iconsFilter/bed.svg';
import Check from '../assets/icons/iconsFilter/check.svg';

const FilterJourney = () => {

    return (
    <div className="filterMenu">
        <h1>Jornadas</h1>
        <div className="filterList">

        </div>
    </div>
    )
}

const contentFilter = () => {
    let icons = [Table, PaperPlane, PlayCircle, Pen, Bed, Check];

   

    fetch("https://api-d1-test.herokuapp.com/api/filter").then(r => {
        return r.json(); 
    }).then(jasonFilter => {

        let dados = jasonFilter;

        for(let i = 0; i < jasonFilter.length; i++) {
            document.querySelector(".filterList").innerHTML += `
            <div class="teste">
                <img src=${icons[i]} />
                <h4>${dados[i].name}</h4>
                <p>${dados[i].quantity}</p>
                </div> 
                `
            }
        })
}
    
contentFilter();

export default FilterJourney;



// import React from 'react';
// import './index.css';

// import all from '../assets/icons/iconsFilter/table.svg';
// import paperPlane from '../assets/icons/iconsFilter/paper-plane.svg';
// import playCircle from '../assets/icons/iconsFilter/play-circle.svg';
// import pen from '../assets/icons/iconsFilter/pen.svg';
// import bed from '../assets/icons/iconsFilter/bed.svg';
// import check from '../assets/icons/iconsFilter/check.svg';


// const Filter = ({ journeys, handleClickJourney }) => {
//     const icons = [all, paperPlane, playCircle, pen, bed, check];

//     return (
//         <div id="filter">
//             <h1>Jornadas</h1>
//             {journeys && journeys.journeysInfo && journeys.journeysInfo.length > 0 ? journeys.journeysInfo.map((journey, i) => (
//                 <div className={`options ${journeys.journeysApplied[i] ? 'active' : 'disabled'}`}
//                     key={journey.id}
//                     onClick={() => handleClickJourney(i)}>
//                     <p>{journey.name}</p>
//                     <span>{journey.quantity}</span>
//                 </div>
//             ))
//             : null}
//         </div>
//     );
// };

// export default Filter;