/* Maneira mais simples 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
//Maneira via funções 
let listaNumSorteados = [];
let quantidade = 10; 
let numeroAleatorio = gerarNumeroAleatorio();
let contador = 1;
exibirMensagemInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${quantidade}`); 
}


function verificarChute(){
    let input = document.querySelector('input').value;
    let tentativa = contador > 1 ? 'tentativas' : 'tentativa';
    if(input == numeroAleatorio){
        exibirTexto('h1', 'Parabéns!!');
        exibirTexto('p', `Você descobriu o número secreto com ${contador} ${tentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);

    }else if(input > numeroAleatorio){
        contador++;
        exibirTexto('h1', `O número é menor que ${input}`);
    }else{
        contador++;
        exibirTexto('h1', `O número é maior que ${input}`);
    }
    limparCampo();
};

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * quantidade + 1);
    let qntdLista = listaNumSorteados.length;
    if(qntdLista == quantidade){
        listaNumSorteados = [];
    }
    if(listaNumSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio;
    }else{
        listaNumSorteados.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo() { 
    numeroAleatorio = gerarNumeroAleatorio();
    exibirMensagemInicial()
    contador = 1;
    limparCampo();
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}