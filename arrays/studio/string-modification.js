const input = require('readline-sync');
let str = "LaunchCode";

// console.log(str.slice)
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3)
let newStr2 = str.slice(0, 3)
console.log(newStr.concat(newStr2));
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str} and the modified string is ${newStr.concat(newStr2)}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
{
let strInput = '';
let strStart = '';
let strCalc = '';
let strEnd = '';
let strFinal = '';
}
strInput = Number(input.question("Please enter the number of letters that will be relocated: "));
{
if (Number(strInput) > 9){
    console.log('Value to high')
    strStart = str.slice(0, 3);
    strCalc = strStart.length - str.length;
    strEnd = str.slice(strCalc);
    strFinal = strEnd.concat(strStart);
    console.log(strFinal)
} else {
    strStart = str.slice(0, strInput);
    strCalc = strStart.length - str.length;
    strEnd = str.slice(strCalc);
    strFinal = strEnd.concat(strStart);
    console.log(strFinal)
}
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
