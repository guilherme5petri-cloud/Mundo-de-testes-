let titulo = document.querySelector("h1");
titulo.innerHTML = "Olá bem vindo ao mundo dos testes do Gui";

function botaoCalculadora(){
    let escolhaOSinal = prompt("Digite o Número do sinal que deseja usar: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão(/)");
    if(escolhaOSinal < 1 || escolhaOSinal > 4){
        alert("Número inválido, por favor escolha um número entre 1 e 4");
        return;
    }
    let primeiroValor = parseFloat(prompt("Digite um número"));
    let segundoValor = parseFloat(prompt("Digite outro número"));

    if(escolhaOSinal === '1'){
        let resultadoSoma = primeiroValor + segundoValor;
        alert(`O resultado da soma é: ${resultadoSoma}`);
    } else if(escolhaOSinal === '2'){
        let resultadoSubtracao = primeiroValor - segundoValor;
        alert(`O resultado da subtração é: ${resultadoSubtracao}`);
    } else if(escolhaOSinal === '3'){
        let resultadoMultiplicacao = primeiroValor * segundoValor;
        alert(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);
    } else if(escolhaOSinal === '4'){
        let resultadoDivisao = primeiroValor / segundoValor;
        alert(`O resultado da divisão é: ${resultadoDivisao}`);
    }
} 

function botaoalert(){
    alert("olá, bem vindo ao mundo de testes do Gui");
}

function botaoprompt(){
    let nome = prompt("qual é o seu nome?");
    alert(`Olá ${nome}, seja bem vindo ao mundo de testes do Gui`);
}

let informacoes = [
    "A primeira Copa do Mundo aconteceu em 1930, no Uruguai.",
    "O maior artilheiro da história das Copas é Miroslav Klose, da Alemanha, com 16 gols.",
    "Apenas 8 países já conquistaram o título mundial masculino: Brasil, Alemanha, Itália, Argentina, França, Uruguai, Inglaterra e Espanha.",
    "A taça atual da Copa pesa cerca de 6,1 kg e é feita de ouro de 18 quilates."
];

function botaoInformacoes() {

    if (informacoes.length === 0) {
        alert("Todas as informações já foram exibidas!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * informacoes.length);

    alert(informacoes[indiceAleatorio]);

    // Remove a informação usada
    informacoes.splice(indiceAleatorio, 1);
}