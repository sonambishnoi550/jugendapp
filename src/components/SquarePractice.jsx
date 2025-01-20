import React from 'react'

const SquarePractice = () => {
    const addNumbers = (num1, num2) => {
        return num1 * num2;
    }
    const sum=addNumbers(2,2)
  return (
      <div>{ sum}</div>
  )
}

export default SquarePractice