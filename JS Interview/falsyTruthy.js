//============Falsy value======================== 
/*                                              
=>   0
=>   ""
=>  false
=>  undefined
=>  NaN
=>  null
*/
//=============Truth value========================
/*
=> All number except zero.
=> All carecter and string except empty string. 
=> empty array [] and all defined array
=> empty object {} and all defined object
*/
//=================================================

var values = 0;
if(values){
    console.log("Is truthy value");
}else{
    console.log("Is falsy value");
}