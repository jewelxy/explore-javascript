const numbers = [3,2,6,8,7];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
console.log(output);