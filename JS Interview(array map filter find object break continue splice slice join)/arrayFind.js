//Provide the at least matching value. 
//If haven't any matching value send the default array.

const numbers = [3,2,6,8,7];

// const isThere = numbers.find(element => element<2);  // provide default array
const isThere = numbers.find(element => element<3);  // provide 2 from numbers array
console.log(isThere);