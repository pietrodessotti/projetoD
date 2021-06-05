import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Header from './components/Header'
import Filter from './components/FilterJourney'
import TableJourney from './components/TableJourney';

function App() {
// export default () => {

//     const API_FILTER = "https://api-d1-test.herokuapp.com/api/filter"

//     const basicFetch = async (endpoint) => {
//         const req = await fetch(`${API_FILTER}${endpoint}`);
//         const json = await req.json();
//         return json;
//     }
//     const filterBasic = {
//         getFilterList: async () => {
//             return [
//                 [{
//                     filter: await basicFetch(`/`),
//                 }]
//             ];
//         }
//     }
//     useEffect(() => {
//         const loadAll = async () => {
//             let filter = await filterBasic.getFilterList();
//             let consulta = document.querySelector().innerHTML = jsonBody[0].recipients


//             console.log(filter)
//         }

//         loadAll();
//     }, []);

// }



  return (
    <div className="homePage">

    <Menu />
    <Header />
    <Filter />
    <TableJourney />
    </div>
  )

}

export default App;