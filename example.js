var prompt = require('prompt-sync')();
let age = prompt("Enter your age")

if(age<18){
    console.log('20% discount')
}
else if(age>18 || age <65){
    console.log('normal ticket price')
}
else if(age>=65)
{
    console.log('30% seniour discount')
}