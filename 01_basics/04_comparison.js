//console.log("2" > 1);     output: true
//console.log("02" > 1);    output: true

// console.log(null < 0);        output: false
// console.log(null == 0);       output: false
// console.log(null >= 0);       output: true
//the reason is that an equality check == and comparisons >, <, >=, <= work differently. comparisons convert null to a number, treating it as 0. that's why null>=0 is true and null>0 and null==0 is false.

// console.log(undefined < 0);           All three are false
// console.log(undefined == 0);
// console.log(undefined >= 0);

//=== (strict check: it check value and data type both)
//console.log("2" === 2);     false
