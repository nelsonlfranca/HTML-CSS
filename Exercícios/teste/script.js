// Inicializar lista_de_valores como uma lista vazia
let listaDeValores = [];


//Adicionado valor
// Adicionar um evento ao botão "Adicionar" para chamar a função adicionarValor() quando clicado
document.getElementById('adicionarBtn').addEventListener('click', adicionarValor);

function adicionarValor() {
    // Obter o valor do campo de entrada
    let numero = document.getElementById('numeroInput').value;
    
    // Obter o elemento de erro para exibir mensagens de erro
    let erro = document.getElementById('error');
    
    // Limpar qualquer mensagem de erro anterior
    erro.textContent = '';
    
    // Verificar se o campo de entrada está vazio
    if (numero === '') {
        // Mostrar mensagem de erro se o campo estiver vazio
        erro.textContent = "Por favor, insira um valor.";
        return; // Sair da função
    }

    // Converter o valor para número
    numero = Number(numero);

    // Verificar se o valor é um número entre 1 e 100
    if (isNaN(numero) || numero < 1 || numero > 100) {
        // Mostrar mensagem de erro se o valor não estiver no intervalo desejado
        erro.textContent = "O valor deve ser um número entre 1 e 100.";
        return; // Sair da função
    }

    // Adicionar o valor à lista_de_valores
    listaDeValores.push(numero);

    // Limpar o campo de entrada
    document.getElementById('numeroInput').value = '';

    // Atualizar a visualização da lista de valores
    atualizarVisualizacao();
}

// Função para adicionar um valor à lista


// Função para atualizar a visualização da lista de valores
function atualizarVisualizacao() {
    // Obter o elemento onde os números adicionados serão mostrados
    let numerosAdicionados = document.getElementById('numerosAdicionados');
    
    // Atualizar o texto do elemento para mostrar os valores na lista
    numerosAdicionados.textContent = 'Números adicionados: ' +listaDeValores.join(', ');
}

// Adicionar um evento ao botão "Finalizar" para chamar a função finalizar() quando clicado
document.getElementById('finalizarBtn').addEventListener('click', finalizar);



// Função para calcular e mostrar a soma dos valores
function finalizar() {
    // Obter o elemento de erro para exibir mensagens de erro
    let erro = document.getElementById('error');
    
    // Limpar qualquer mensagem de erro anterior
    erro.textContent = '';

    // Verificar se a lista de valores está vazia
    if (listaDeValores.length === 0) {
        // Mostrar mensagem de erro se a lista estiver vazia
        erro.textContent = 'Nenhum valor foi adicionado.';
        return; // Sair da função
    }

    // Calcular a soma dos valores na lista
    let soma = listaDeValores.reduce((total, num) => total + num, 0);

    // Obter o elemento onde o resultado será mostrado
    let resultado = document.getElementById('resultado');
    
    // Mostrar a soma ao usuário
    resultado.textContent = `A soma de todos os valores adicionados é: ${soma}`;
}



