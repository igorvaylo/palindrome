'use strict'

// debugger

function pal(str) {
  str = str.toLowerCase().replaceAll(' ', '');
  const strArray = [...str];
  const newArray = [];
  strArray.forEach(index => {
    newArray.unshift(index);
  });
  const reversedStr = newArray.join('');
  console.log(str);
  return str === reversedStr;
}


console.log(pal('громИлы Мыли морг'));



