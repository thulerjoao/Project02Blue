var prompt = require('prompt-sync')();


const random = (num) => Math.random() * num;
const variaveis = ["pedra","papel","tesoura"];
let vitoriasJogador; //contador das vezes que o jogador ganhou
let vitoriasPc; //contador das vezes que a máquina ganhou
let nRodadas;
let escolhaJogador;
let escolhaPc;
let novamente = 1;

console.log(`*** Jokenpô ***`);
console.log(`O jogo é simples. A cada rodada, opte por [pedra], [papel] ou [tesoura] e então, conte com a sorte para vencer seu oponente virtual. \n`);

while(novamente == 'sim' || novamente == 's' || novamente == 1){ 
    
    vitoriasJogador = 0;
    vitoriasPc = 0;

    nRodadas = parseInt(prompt(`Quantas rodadas você quer fazer? `));
        while(nRodadas < 1 || isNaN(nRodadas)){
            console.clear();
            console.log(`!!! ATENÇÃO !!!\n`);
            nRodadas = parseInt(prompt(`Digite um número maior que 0 para quantidade de rodadas: `));
            console.clear();
        }
        console.clear();
        console.log(`Teremos ${nRodadas} rodada(s)! \n`);
    for(i=0; i < nRodadas; i++){
        escolhaJogador = prompt(`Rodada ${i+1} - Faça sua escolha: `).toLowerCase();           
        while(escolhaJogador != "pedra" && escolhaJogador != "papel" && escolhaJogador != "tesoura"){
            console.clear();
            console.log(`!!! ATENÇÃO !!!\n`);
            escolhaJogador = prompt(`Entrada inválida. Escolha entre [pedra] [papel] [tesoura]: `).toLowerCase();
            console.clear();
        }
        
        escolhaPc = variaveis[parseInt(random(3))];
    
        if(escolhaJogador == "pedra" && escolhaPc == "tesoura"){
            vitoriasJogador += 1;
        }else if(escolhaJogador == "papel" && escolhaPc == "pedra"){
            vitoriasJogador += 1;
        } else if(escolhaJogador == "tesoura" && escolhaPc == "papel"){
            vitoriasJogador += 1;
        } else if(escolhaJogador == "pedra" && escolhaPc == "papel"){
            vitoriasPc += 1;
        } else if(escolhaJogador == "papel" && escolhaPc == "tesoura"){
            vitoriasPc += 1;
        } else if(escolhaJogador == "tesoura" && escolhaPc == "pedra"){
            vitoriasPc += 1;
        }
        console.clear();
        console.log(`Rodada ${i+1} - \n`);
        console.log(`Você jogou ${escolhaJogador.toUpperCase()} e o computador ${escolhaPc.toUpperCase()}.`);
        
        if(escolhaJogador == escolhaPc){     
            console.log(`A rodada empatou e o placar continua igual:`);
        }
        if(vitoriasJogador>vitoriasPc){
            console.log(`Você VENCE por ${vitoriasJogador} X ${vitoriasPc} \n`);
        }else if(vitoriasJogador<vitoriasPc){
            console.log(`Você PERDE por ${vitoriasPc} X ${vitoriasJogador} \n`);
        }else if(vitoriasJogador == vitoriasPc){console.log(`Vocês EMPATAM por ${vitoriasPc} X ${vitoriasJogador} \n`);
        }
    }
    if(vitoriasJogador > vitoriasPc){
        console.log(`Parabéns!!! Prove que consegue derrotar o computador mais uma vez!`);
    }else if(vitoriasJogador == vitoriasPc){
        console.log(`Empate nunca é o melhor resultado. Tente agora uma vitória!`);
    }else{
        console.log(`Uma pena que não tenha vencido. Mas você pode se redimir tentando de novo...`);
    }
    novamente = prompt(`Deseja jogar novamente? [s] ou [n]: `).toLowerCase();
    console.clear();
    while(novamente != 'sim' && novamente != 's' && novamente != 1 
            && novamente != 'não' && novamente != 'nao'&& novamente != 'n' && novamente != 0){
        console.clear();
        console.log(`!!! ATENÇÃO !!! \n`);
        novamente = prompt(`Entrada inválida. Digite [s] para recomeçar ou [n] para finalizar: `).toLowerCase();
        console.clear();
    }     
} 