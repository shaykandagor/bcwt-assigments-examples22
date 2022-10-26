const { camelCase } = require('lodash');
const _ = require('lodash');
// never use 'var'
//const or let is preferred
_.camel



//Ex.1
console.log('Hello World, I\'Node');

//Ex. 2
let output = 'Just testing nodemon, using lodast to conve'+ 
'this camel case';

console.log(output);
output = _.camelCase(output);
console.log(output);