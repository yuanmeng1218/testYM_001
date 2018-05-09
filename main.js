//const fibonacci = require('./lib/fibonacci')
const fibonacci = require('./lib/anagrams')

// for(i = 1; i<= 20; i++)
// {
//     console.log(fibonacci(i));
// }
for(var i = 0; i < 2; i++)
{
    console.log(anagrams("ab")[i]);
}

//console.log("Hello world");
/*
function isLeapYear(n){
    if(n % 400 === 0){ return true }
    if(n % 100 === 0){ return false }
    if(n % 4 === 0){return true }
    return false
}
console.log("2000"+isLeapYear(2000));
console.log("1900"+isLeapYear(1900));
console.log("2008"+isLeapYear(2008));
console.log("2009"+isLeapYear(2009));
*/

