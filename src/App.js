// import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Header from './components/Header'
import Filter from './components/FilterJourney'
import TableJourney from './components/TableJourney';

// function App() {
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

import React, { useEffect, useReducer } from 'react';

const initialState = {
    journeysTable: [],
    journeysInfo: new Array(6),
    journeysApplied: [true, false, false, false, false, false],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_JOURNEY': {
            const newState = { ...state };
            newState.journeysTable = [...action.playload.journey];
            return newState;
        }

        case 'GET_JOURNEYS_INFO': {
            const newState = { ...state };
            newState.journeysInfo = [...action.playload];
            return newState;
        }

        case 'HANDLE_CLICK_JOURNEY': {
            if (action.playload.index !== 0 && state.journeysApplied[0]) {
                state.journeysApplied[0] = false;
            }
            return {
                ...state,
                journeysApplied: [
                    ...state.journeysApplied.map((value, index) =>
                        action.playload.index === index ? !value : value
                    ),
                ],
            };
        }

        default:
            return state;
    }
}

const Home = () => {
    const [journeys, dispatch] = useReducer(reducer, initialState);

    const getJourney = async () => {
        const journey = await fetch(
            `https://api-d1-test.herokuapp.com/api/journey`
        ).then(async (res) => await res.json());

        dispatch({ type: 'GET_JOURNEY', playload: { journey } });
    };

    const handleClickJourney = async (index) => {
        if (!journeys.journeysTable[index]) {
            getJourney(index);
        }
        dispatch({ type: 'HANDLE_CLICK_JOURNEY', playload: { index } });
    };

    useEffect(() => {
        const getJourneysInfo = async () => {
            await fetch(`https://api-d1-test.herokuapp.com/api/filter`).then(async (res) => res.json()).then((dataTransformed) => {
                dispatch({
                    type: 'GET_JOURNEYS_INFO',
                    playload: dataTransformed,
                });
            });
        };

        getJourneysInfo();
        getJourney();
    }, []);

    return (
        <div className='search'>
            <Menu />
            <Header />
            <Filter journeys={journeys} handleClickJourney={handleClickJourney} />
            <TableJourney journeys={journeys} />
        </div>
    );
};

export default Home;

//   return (
//     <div className="homePage">

//     <Menu />
//     <Header />
//     <Filter />
//     <TableJourney />
//     </div>
//   )

// }

// export default App;