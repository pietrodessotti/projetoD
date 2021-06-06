import React from 'react';
import './index.css';

import Table from '../assets/icons/iconsFilter/table.svg';
import PaperPlane from '../assets/icons/iconsFilter/paper-plane.svg';
import PlayCircle from '../assets/icons/iconsFilter/play-circle.svg';
import Pen from '../assets/icons/iconsFilter/pen.svg';
import Bed from '../assets/icons/iconsFilter/bed.svg';
import Check from '../assets/icons/iconsFilter/check.svg';

const TableJourney = ( {journeys} ) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Destinatários</th>
                        <th>Sucesso</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="tableApi">

                </tbody>
            </table>
        </div>
    )
}

const contentTable = () => {

    let icons = [Table, PaperPlane, PlayCircle, Pen, Bed, Check]; 
    let names = ["Todas" , "Enviando", "Ativa", "Configurando", "Ociosa", "Concluída"]

    fetch("https://api-d1-test.herokuapp.com/api/journey").then(req => {
        return req.json(); 
    }).then(jasonTable => {

        let dados = jasonTable;

        for(let i = 0; i < dados.length; i++) {
            document.getElementById("tableApi").innerHTML += `
            <tr><td>${dados[i].name}</td>
            <td>${dados[i].recipients}</td>
            <td>${dados[i].success}</td>
            <td><img src=${icons[dados[i].status]} />
            <p>${names[dados[i].status]}<p></td></tr>
            `
        }
});
}

contentTable();

export default TableJourney;



// import React from 'react';
// import './index.css';

// import all from '../assets/icons/iconsFilter/table.svg';
// import paperPlane from '../assets/icons/iconsFilter/paper-plane.svg';
// import playCircle from '../assets/icons/iconsFilter/play-circle.svg';
// import pen from '../assets/icons/iconsFilter/pen.svg';
// import bed from '../assets/icons/iconsFilter/bed.svg';
// import check from '../assets/icons/iconsFilter/check.svg';




// const icons = [all, paperPlane, playCircle, pen, bed, check];
// const TableJourney = ({ journeys }) => (
//     <div className='container'>
//         <section id='journey'>
//             <table id="data-table">
//                 <thead>
//                     <tr>
//                         <th>Nome</th>
//                         <th>Destinatários</th>
//                         <th>Sucesso</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody id="tableJourney">
//                     {journeys && journeys.journeysTable && journeys.journeysTable.length > 0 ? journeys.journeysTable.map((journey, index) => {
//                         return (
//                             (journeys.journeysApplied[journey.status] || journeys.journeysApplied[0]) && (
//                                 <tr>
//                                     <td>{journey.name}</td>
//                                     <td>{journey.recipients}</td>
//                                     <td>{journey.success}</td>
//                                     <td><img src={[icons[journey.status]]} /></td>
//                                 </tr>
//                             )
//                         );
//                     })
//                         : null}
//                 </tbody>
//             </table>
//         </section>
//     </div>
// );

// export default TableJourney;