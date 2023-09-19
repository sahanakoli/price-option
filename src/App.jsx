/* eslint-disable react/jsx-no-undef */

import { BarChart } from 'recharts'
import './App.css'
import LineChart from './component/LineChart/LineChart'
import NavBar from './component/NavBar/NavBar'
import PriceOption from './component/PriceOption/PriceOption'
// import DaisyNav from './component/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <BarChart></BarChart>
    </>
  )
}

export default App
