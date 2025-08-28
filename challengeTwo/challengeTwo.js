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

if (resultado <= 10){
    rankVitorias = "ferro"
} else if(resultado > 10 && resultado < 21){
    rankVitorias = "Bronze"
} else if(resultado > 20 && resultado < 51){
    rankVitorias = "Prata"
} else if(resultado > 50 && resultado < 81){
    rankVitorias = "Ouro"
} else if(resultado > 80 && resultado < 91){
    rankVitorias = "Diamante"
} else if(resultado > 90 && resultado < 101){
    rankVitorias = "Lendário"
} else{
    rankVitorias = "Imortal"
}

console.log(rankVitorias)