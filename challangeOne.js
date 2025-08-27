/*importando e inicializando o módulo prompt-sync, necessário no node.js para 
entrada de dados do usuário*/
const prompt = require("prompt-sync")() 

//separador de texto para ficar mais legível
console.log(".........................................................................")
//criando uma variável que vai receber um valor do usuário
var nickName = prompt("Qual o nome do seu Herói? ");
console.log(".........................................................................")
var xperience = prompt("Quanto de experiência o seu Heróis possui? ");
console.log(".........................................................................")
//criando uma variável que tera seu valor alterado durante a comparação "if"
let nivelHeroi = "Sem Nível"

//mostrando na tela as variáveis, somente para testar, sem utilide para o código
//console.log(nickName);
//console.log(xperience);

//estrutura de repetição com if/else if/else
//testa uma condição
if (xperience < 1000){
//se a condição for verdadeira, armazena um novo valor na variável nivelHeroi
    nivelHeroi = "Ferro"
//caso a condição seja falsa, realiza um novo teste
}else if (xperience >= 1001 && xperience <= 2000){
    nivelHeroi = "Bronze"
}else if (xperience > 2000 && xperience <= 5000){
    nivelHeroi = "Prata"
}else if (xperience > 5000 && xperience <= 7000){
    nivelHeroi = "Ouro"
}else if (xperience > 7000 && xperience <= 8000){
    nivelHeroi = "Platina"
}else if (xperience >= 8001 && xperience < 9000){
    nivelHeroi = "Ascendente"
}else if (xperience >= 9001 && xperience < 10000){
    nivelHeroi = "Imortal"
//caso nenhuma condição anterior seja verdadeira
}else{
    nivelHeroi = "Radiante"
}

/*mostra na tela uma mensagem com o nome que o usuário digitou e com o resultado da 
comparação de experiência do personagem que o usuário informou de acordo com a
variação de níveis apresentados na tabela */
console.log("O herói de nome, " + nickName + ", está no nível: " + nivelHeroi)
console.log(".........................................................................")
