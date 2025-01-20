import React from 'react'
import Events from './components/Events'
import Stars from './components/Stars'
import AddNumber from './components/AddNumber'
import TablePrint from './components/TablePrint'
import Practice from './components/Practice'
import SquarePractice from './components/SquarePractice'
import Cube from './components/Cube'
import ArrayPractice from './components/ArrayPractice'
import MethodsPractice from './components/MethodsPractice'
const App = () => {
  return (
    <><Events />   
      <Stars/>
      {/* <TablePrint /> */}
      <AddNumber />
      <Practice />
      <SquarePractice />
      <Cube />
      <ArrayPractice />
      <MethodsPractice/>
    </>
  )
}

export default App