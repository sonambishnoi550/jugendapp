import React from 'react'
import FormValidation from './components/FormValidation'
import Table from './components/Table'
import Stars from './components/Stars'
import Number from './components/Number'
const App = () => {
  return (
    <div><FormValidation />   
      <Stars/>
      <Table />
      <Number/>
    </div>
  )
}

export default App