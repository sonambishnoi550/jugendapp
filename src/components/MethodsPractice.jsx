import React from 'react'

const MethodsPractice = () => {
    // at method
    const cart = ["apple", "banana", "pear"]
    console.log(cart.at(-1))
    function find (){
        return cart.at(-1)
    }
    console.log(find())

    // concat method
    const letters = ["a", "b", "c"]
    const numbers = [1, 2, 3,]
    const integers = letters.concat(numbers)
    console.log(integers)
    
  // entries
  const array1 = ['a', 'b', 'c'];
 const iterator1 = array1.entries();
  console.log(iterator1.next().value);

  // every
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array2 = [1, 30, 39, 29, 10, 13];
  console.log(array2.every(isBelowThreshold));

  // fill
  const array3 = [1, 2, 3, 4];
  console.log(array3.fill(0, 2, 4));

  // filter
  const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter((word) => word.length > 6);
  console.log(result);
  return (
    <div>MethodsPractice</div>
  )
}

export default MethodsPractice