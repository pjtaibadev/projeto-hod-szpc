// 1- dar um jeito de pagar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


// 2- dar um jeito de indentidicar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

// 3- desmarcar o botão selecionado anterior 

        desativarBotaoSelecionado();


// 4- marcar o botão clicado como se estivesse selecionado 

        marcarBotaoSelecionado(botao);

// 5- esconder a imagem anterior selecionada 

        esconderImagemAtiva();

// 6 fazer aparecer a imagem correspondente ao botao clicado

        mostrarImagemdeFundo(indice);

// 7 escoder a informaçoes do dragão anterioumente selecionado 

        esconderInformacoesAtivas();

// 8 - irmaçoes correta do dragão referente ao botao clicado

        mostarInformacoes(indice);


   });

 });
 
function mostarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSeleionado = document.querySelector(".selecionado");
    botaoSeleionado.classList.remove("selecionado");
}

