const num1 = [5,4,3,2,1];
const num2 = [6,7,8,9,10];
const num = [...num1,...num2];
console.log(num);

const takaPoisa = [650,450,250];
const maxTaka = Math.max(...takaPoisa);
console.log(maxTaka);
const minTaka = Math.min(...takaPoisa);
console.log(minTaka);