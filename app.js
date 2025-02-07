//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome !== '') {
        amigos.push(nome);
        input.value = '';
        atualizarListaAmigos();
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const sorteio = [...amigos];
    let sorteado;
    do {
        sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
    } while (sorteado === amigos[amigos.length - 1]);

    exibirResultado(`O amigo secreto sorteado é: ${sorteado}`);
}

// Função para exibir o resultado do sorteio na interface
function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = resultado;
    listaResultado.appendChild(li);
}