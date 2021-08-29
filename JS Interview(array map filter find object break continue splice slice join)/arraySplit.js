const nums = [2,3,4,5,6,7,8,10];

const part = nums.slice(3,6);
//slice(start index, end index): 
/*
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to 
indicate an offset from the end of the array. For example, 
-2 refers to the second to last element of the array.
*/

// console.log(part);
// console.log(nums);

const removed = nums.splice(2,5,89,71,79);
//splice(start index,item number,inserted values):
/* 
Removes elements from an array and, if necessary, inserts new 
elements in their place, returning the deleted elements.
 */

// console.log(removed);
// console.log(nums);

const together = nums.join(",");
//join("separator")
/* 
Adds all the elements of an array into a string, 
separated by the specified separator string 
*/

console.log(together);
