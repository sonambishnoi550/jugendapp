import React from 'react'

const ArrayPractice = () => {
    // length and index
    const fruits = ["Apple", "Banana"];
    console.log(fruits.length); 
    console.log(fruits[0]);

    const arrayEmpty = new Array(2);
    console.log(arrayEmpty.length); 
    console.log(arrayEmpty[0]);
    console.log(0 in arrayEmpty);
    console.log(1 in arrayEmpty); 

    const arrayOfOne = new Array("2");
    console.log(arrayOfOne.length); 
    console.log(arrayOfOne[0]); 

    // array from string
    console.log(Array.from("foo"));
    
    const set = new Set(["foo", "bar", "baz", "foo"]);
    console.log(Array.from(set));

    const mapper = new Map([
        ["1", "a"],
      ["2", "b"],
    ]);
   console.log(Array.from(mapper.values()));
  console.log(Array.from(mapper.keys()));

  function f() {
    console.log(arguments)
    return Array.from(arguments)
  }
f(1,2,3,)


  return (
    <div></div>
  )
}

export default ArrayPractice