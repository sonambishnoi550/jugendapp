import React from 'react'
import Events from './components/Events'
import Stars from './components/Stars'
import AddNumber from './components/AddNumber'
import TablePrint from './components/TablePrint'
const App = () => {
  return (
    <><Events />   
      <Stars/>
      <TablePrint />
      <AddNumber/>
    </>
  )
}

export default App