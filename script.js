// Array que armazena os amigos
let amigos = [];

// Função para adicionar amigos ao array e exibir na lista HTML
function adicionarAmigo() {
    // Captura o valor do campo de texto
    const nomeAmigo = document.getElementById('amigo').value;

    // Validação: Verifica se o campo de texto está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtém o elemento da lista
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Percorre o array de amigos e adiciona um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = amigos[i]; // Define o texto do item de lista com o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o item à lista
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para o sorteio
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    // Gera um índice aleatório para selecionar um amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome do amigo sorteado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

