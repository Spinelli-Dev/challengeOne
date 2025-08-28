const prompt = require("prompt-sync")()

console.log("Verificador de rank baseado no saldo de vitórias!")
let win = prompt("Digite a quantidade de vitórias: ");
let loss = prompt("Digite a quantidade de derrotas: ");

let resultado = calculoRank(win, loss)
console.log(resultado)

function calculoRank(win, loss){
    return win - loss
    console.log("Você tem: ")
}