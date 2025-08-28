//--------------------------------------------------------------------------------------
/*importando e inicializando o módulo prompt-sync, necessário no node.js para 
entrada de dados do usuário*/
const prompt = require("prompt-sync")()
//--------------------------------------------------------------------------------------
// Mensagem informando a função do programa
console.log("Verificador de rank baseado no saldo de vitórias!")
// Mensagem para separar os textos, apenas como função visual
console.log("----------------------------------------------------------")
// Solicitando entrada de dados para o usuário
let win = prompt("Digite a quantidade de vitórias: ");
console.log("----------------------------------------------------------")
let loss = prompt("Digite a quantidade de derrotas: ");
console.log("----------------------------------------------------------")

//variável para armazenar o rank do herói de acordo com a quantidade de vitórias.
let rankVitorias = "a"
//--------------------------------------------------------------------------------------
// Variável que vai receber o resultado de uma função.
let resultado = calculoRank(win, loss)
// Mostrando o resultado da variável, apenas para testar antes de continuar o código
//console.log(resultado)

/* Função que calcula a subtração entre vitórias e derrotas, que foram informadas 
pelo usuário */
function calculoRank(win, loss){
    return win - loss
    console.log("Você tem: ")
}

/* Estrutura de repetição, que avalia e armazena o rank do herói de acordo com o 
resultado do calculo da função */
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

/* Estrutura 'if' para emitir uma mensagem de acordo com o resultado da função. 
O exercício solicitou só uma saída, mas havendo a possibilidade de resultado negativo 
opitei por ter duas mensagens, uma para cada caso. */
if (resultado > 0){
    console.log(`O Herói tem o saldo de ${resultado} vitórias e está no nível de: ${rankVitorias}\n`)
} else{
    console.log("O Herói teve mais derrotas do que vitórias. Precisa ficar mais forte!\n")
}