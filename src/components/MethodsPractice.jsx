import React from 'react'

const MethodsPractice = () => {
  // at method
  const arr = [5, 12, 8, 130, 44];
  let index = 2;
  console.log(arr.at(index));

  // concat method
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);
  console.log(array3);

  // copywithin method
  const array = ['a', 'b', 'c', 'd', 'e'];
  console.log(array.copyWithin(0, 3, 4));

  // enteries method
  const array4 = ['a', 'b', 'c'];
  const iterator1 = array4.entries();
  console.log(iterator1.next().value);

  // every method
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array5 = [1, 30, 39, 29, 10, 13];
  console.log(array5.every(isBelowThreshold));

  // fill method
  const array6 = [1, 2, 3, 4];
  console.log(array6.fill(0, 2, 4));

  // filter method
  const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter((word) => word.length > 6);
  console.log(result);

  // find method
  const array7 = [5, 12, 8, 130, 44];
  const found = array7.find((element) => element > 10);
  console.log(found);

  // findIndex method
  const array8 = [5, 12, 8, 130, 44];
  const isLargeNumber = (element) => element > 13;
  console.log(array8.findIndex(isLargeNumber));

  // findlast method
  const array9 = [5, 12, 50, 130, 44];
  const foundlast = array9.findLast((element) => element > 45);
  console.log(foundlast);

  // flat method
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());

  // flatMap method
  const arr2 = [1, 2, 1];
  const result1 = arr2.flatMap((num) => (num === 2 ? [2, 2] : 1));
  console.log(result1);

  // forEach method
  const array10 = ['a', 'b', 'c'];
  array10.forEach((element) => console.log(element));

  // include method
  const arr3 = [1, 2, 3];
  console.log(arr3.includes(2));

  // indexOf method
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.indexOf('bison'));

  // join method
  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.join("-"));

  // key method
  const array11 = ['a', 'b', 'c'];
  const iterator = array11.keys();
  for (const key of iterator) {
    console.log(key);
  }

  // lastIndexOf method
  const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
  console.log(animals.lastIndexOf('Dodo'));

  // map method
  const array12 = [1, 4, 9, 16];
  const map1 = array12.map((x) => x * 2);
  console.log(map1);

  // push method
  const animal = ['pigs', 'goats', 'sheep'];
  const count = animal.push('cows');
  console.log(count);
  console.log(animal);

  //   pop method
  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
  console.log(plants.pop());

  // unshift method
  const array13 = [1, 2, 3];
  console.log(array13.unshift(4, 5));
  console.log(array13);

  // shift method
  const array14 = [1, 2, 3];
  const firstElement = array14.shift();
  console.log(array14);

  // reverse method
  const array15 = ['one', 'two', 'three'];
  console.log(array15);
  const reversed = array15.reverse();
  console.log('reversed:', reversed);

  // reduce method
  const array16 = [1, 2, 3, 4];
  const initialValue = 0;
  const sumWithInitial = array16.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  console.log(sumWithInitial);

  //   reduceRight method
  const array17 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  const result2 = array17.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  console.log(result2);

  // slice method
  const Animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(Animals.slice(2, 4));

  // some method
  const array18 = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;
  console.log(array18.some(even));

  // sort method
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort();
  console.log(months);

  // splice method
  const month = ['Jan', 'March', 'April', 'June'];
  month.splice(1, 0, 'Feb');
  console.log(month);
  // toLocaleString method
  const array19 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
  const localeString = array19.toLocaleString('en', { timeZone: 'UTC' });
  console.log(localeString);

  // toString method
  const arr7 = [1, 2, 'a', '1a'];
  console.log(arr7.toString());

  // value method
  const array20 = ['a', 'b', 'c'];
  const Iterator = array20.values();
  for (const value of Iterator) {
    console.log(value);
  }

  // with method
  const arr9 = [1, 2, 3, 4, 5];
  console.log(arr9.with(2, 6))


  return (
    <div>MethodsPractice</div>
  )
}

export default MethodsPractice