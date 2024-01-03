const prompt = require("prompt-sync")();
let nickname = prompt("Insira o nome do Jogador: ");
let vitorias = prompt( nickname + ", insira seu numero de vitórias: ");
let derrotas = prompt( nickname + ", insira seu numero de derrotas: ");

function calcula_saldo(vit, der){
    return vit - der;
}

let saldo = calcula_saldo(vitorias, derrotas);

function rank(saldo_do_rank){
    
    if (saldo_do_rank <= 10){
        nivel = "Ferro";
      }else if (saldo_do_rank <= 20){
        nivel = "Bronze";
      }else if (saldo_do_rank <= 50){
        nivel = "Prata";
      }else if (saldo_do_rank <= 80){
        nivel = "Ouro";
      }else if (saldo_do_rank <= 90){
        nivel = "Diamante";
      }else if (saldo_do_rank <= 100){
        nivel = "Lendário";
      }else{
        nivel = "Imortal"
      }
    return  nivel;
}
let nivel = rank(saldo);

console.log("o Herói " + nickname + " está no nível " + nivel +"!")