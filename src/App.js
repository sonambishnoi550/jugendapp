import React from 'react'
import Events from './components/Events'
import Stars from './components/Stars'
import AddNumber from './components/AddNumber'
import Practice from './components/Practice'
import SquarePractice from './components/SquarePractice'
import Cube from './components/Cube'
import ArrayPractice from './components/ArrayPractice'
import MethodsPractice from './components/MethodsPractice'
import AppTest from './components/AppTest'
import TableRow from './components/TableRow'
import FilterPractice from './components/FilterPractice'
import LocalStorageData from './components/LocalStorageData'

const App = () => {
  return (
    <><Events />   
      <Stars/>
      <AddNumber />
      <Practice />
      <SquarePractice />
      <Cube />
      <ArrayPractice />
      <MethodsPractice />
      <AppTest />
      <TableRow />
      <FilterPractice />
      <LocalStorageData/>
    </>
  )
}

export default App