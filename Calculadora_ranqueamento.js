const prompt = require("prompt-sync")();
let nickname = prompt("Insira o nome do Jogador: ");
let vitorias = prompt( nickname + ", insira seu numero de vitórias: ");
let derrotas = prompt( nickname + ", insira seu numero de derrotas: ");

function calcula_saldo(vit, der){
    return vit - der;
}

let saldo = calcula_saldo(vitorias, derrotas);

function rank(saldo_do_rank){
    let nivel_rank;
    if (saldo_do_rank <= 10){
        nivel_rank = "Ferro";
      }else if (saldo_do_rank <= 20){
        nivel_rank = "Bronze";
      }else if (saldo_do_rank <= 50){
        nivel_rank = "Prata";
      }else if (saldo_do_rank <= 80){
        nivel_rank = "Ouro";
      }else if (saldo_do_rank <= 90){
        nivel_rank = "Diamante";
      }else if (saldo_do_rank <= 100){
        nivel_rank = "Lendário";
      }else{
        nivel_rank = "Imortal"
      }
    return  nivel_rank;
}
let nivel = rank(saldo);

console.log("O Herói " + nickname + " está no nível " + nivel +"!")