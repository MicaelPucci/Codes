const prompt = require("prompt-sync")();


const c =  Number (prompt("Qual eh a temperatura em C:"))
let  F = (c * 9/5) + 32

console.log(F)