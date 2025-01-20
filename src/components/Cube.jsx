import React from 'react'

const Cube = () => {
    const addNumbers = (num1, num2) => {
        return num1 ** num2;
    }
    const sum = addNumbers(3, 3)
    return (
        <div>{sum}</div>
    )
}

export default Cube