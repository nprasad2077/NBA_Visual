import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  getData  from '../components/scripts/index_3.jsx'
import ReactVirtualizedTable from './components/ReactVirtualizedTable.jsx'
import PlayerStats from './components/playerTotals.jsx'

function App() {
  const [count, setCount] = useState(0)

  const query = `
  query MyQuery {
    team(teamAbbr: "HOU", limit: 10) {
      id
      teamName
      season
      wins
    }
  }`;

  useEffect(() => {
    getData(query).then(data => console.log(data)).catch(e => console.error(`Error is: ${e}`));
  }, []);


  return (
    <>
    <div>
      <header class='mb-10'>
        <h1 class='text-6xl font-semibold'>NBA Data</h1>
      </header>
      <ReactVirtualizedTable />
    </div>
    </>
  )
}

export default App
