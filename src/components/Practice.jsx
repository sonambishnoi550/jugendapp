import React from 'react'

const Practice = () => {
    const arr = [1, 2, 3, 4, 6, 7, 9, 10];
    const missingNumbers = (arr) => {
        const missing = []
        for (let i = 1; i <= 10; i++) {
            if (!arr.includes(i)) {
                missing.push(i);
            }
        }
        return missing;
    };
    console.log(missingNumbers(arr))
  return (
    <div></div>
  )
}

export default Practice