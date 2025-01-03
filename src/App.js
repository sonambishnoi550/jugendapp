import React from 'react'
import FormValidation from './components/FormValidation'
import Table from './components/Table'
import Star from './components/Star'
import Number from './components/Number'
const App = () => {
  return (
    <div><FormValidation />   
      <Star/>
      <Table />
      <Number/>
    </div>
  )
}

export default App