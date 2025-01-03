import React from 'react'
import Event from './components/Event'
import Table from './components/Table'
import Stars from './components/Stars'
import Number from './components/Number'
const App = () => {
  return (
    <div><Event />   
      <Stars/>
      <Table />
      <Number/>
    </div>
  )
}

export default App