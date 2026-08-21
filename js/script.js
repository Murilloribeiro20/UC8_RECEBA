// URL da API da Disney
const API_URL = "https://api.disneyapi.dev/character";

// Controle da página
let paginaAtual = 1;
const personagensPorPagina = 50;
let totalCarregados = 0;

// Elementos da página
const container = document.getElementById("container");
const contador = document.getElementById("contador");
const paginaTexto = document.getElementById("paginaAtual");
const btnCarregar = document.getElementById("btnCarregar");

// Busca os personagens na API
async function carregarPersonagens() {

    const url = `${API_URL}?page=${paginaAtual}&pageSize=${personagensPorPagina}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

    // Cria um card para cada personagem
    for (const personagem of dados.data) {
        criarCard(personagem);
    }

    // Atualiza o contador
    totalCarregados += dados.data.length;
    contador.textContent = `${totalCarregados} personagens carregados`;

    // Atualiza a página
    paginaTexto.textContent = `Página ${paginaAtual}`;

    paginaAtual++;
}

// Cria o card
function criarCard(personagem) {

    const card = document.createElement("div");
    card.classList.add("card");

    const imagem = document.createElement("img");
    imagem.src = personagem.imageUrl;
    imagem.alt = personagem.name;

    const nome = document.createElement("p");
    nome.textContent = personagem.name;

    card.appendChild(imagem);
    card.appendChild(nome);

    container.appendChild(card);
}

// Botão
btnCarregar.addEventListener("pointerup", carregarPersonagens);

// Carrega os primeiros 50
carregarPersonagens();