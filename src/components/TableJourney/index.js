import React from 'react';
import './index.css';


const TableJourney = () => {
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

function contentTable() {
    fetch("https://api-d1-test.herokuapp.com/api/journey").then(r => {
        return r.json(); 
    }).then(jasonTable => {
        console.log(jasonTable)
        for(let i = 0; i < jasonTable.length; i++) {
            document.getElementById("tableApi").innerHTML += `
            <tr><td>${jasonTable[i].name}</td>
            <td>${jasonTable[i].recipients}</td>
            <td>${jasonTable[i].success}</td>
            <td>${jasonTable[i].status}</td><br></tr>
        `
    }
});
}

contentTable();

   
export default TableJourney;