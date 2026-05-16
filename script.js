let resultadoJaMostrado = false;

// ===============================
// 📌 DADOS DAS PERGUNTAS
// ===============================

const perguntas = [
    {
        texto: "Qual sua cor favorita?",
        respostas: [
            { texto: "Vermelho, laranja ou amarelo", perfil: "inteligência visual-espacial" },
            { texto: "Azul, verde ou roxo", perfil: "inteligência linguística" },
            { texto: "Preto, branco ou cinza", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual atividade favorita você prefere in seu tempo livre?",
        respostas: [
            { texto: "Pintura, desenho ou escultura", perfil: "inteligência visual-espacial" },
            { texto: "Ler, escrever ou falar", perfil: "inteligência linguística" },
            { texto: "Resolver quebra-cabeças ou jogos de estratégia", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual seu estilo de aprendizagem preferido?",
        respostas: [
            { texto: "Aprendo melhor através de imagens ou diagramas", perfil: "inteligência visual-espacial" },
            { texto: "Aprendo melhor através de palavras escritas ou faladas", perfil: "inteligência linguística" },
            { texto: "Aprendo melhor através de lógica e reslução de problemas", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual seu tipo de filme preferido?",
        respostas: [
            { texto: "Filmes de ação ou aventura", perfil: "inteligência visual-espacial" },
            { texto: "Filmes de drama ou comédia", perfil: "inteligência linguística" },
            { texto: "Filmes de ficção científica ou quebra-cabeças", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual sua atividade atlética preferida?",
        respostas: [
            { texto: "Dança, ginástica ou patinação", perfil: "inteligência corporal-cinestésica" },
            { texto: "Esportes de equipe como futebol, basquete ou vôlei", perfil: "inteligência interpessoal" },
            { texto: "Esportes individuais como tênis, corrida ou natação", perfil: "inteligência intrapessoal" }
        ]
    },
    {
        texto: "Qual seu hobby preferido?",
        respostas: [
            { texto: "Fotografia, pintura ou artesanato", perfil: "inteligência visual-espacial" },
            { texto: "Leitura, escrita ou debates", perfil: "inteligência linguística" },
            { texto: "Resolução de quebra-cabeças ou jogos de lógica", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual seu tipo de música preferido?",
        respostas: [
            { texto: "Música clássica, jazz ou instrumental", perfil: "inteligência musical" },
            { texto: "Música pop, rock ou country", perfil: "inteligência linguística" },
            { texto: "Música eletrônica ou hip-hop", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual seu tipo de comida preferido?",
        respostas: [
            { texto: "Comida gourmet ou exótica", perfil: "inteligência visual-espacial" },
            { texto: "Comida caseira ou tradicional", perfil: "inteligência intrapessoal" },
            { texto: "Comida rápida ou prática", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual atividade você preferiria fazer em seu tempo livre?",
        respostas: [
            { texto: "Ler livros sobre história ou política", perfil: "inteligência linguística" },
            { texto: "Visitar um museu, exposição ou galeria de arte", perfil: "inteligência visual-espacial" },
            { texto: "Resolver quebra-cabeças desafiadores", perfil: "inteligência lógico-matemática" },
            { texto: "Praticar esportes ou fazer exercícios", perfil: "inteligência corporal-cinestésica" },
            { texto: "Ouvir e apreciar músicas", perfil: "inteligência linguística" },
            { texto: "Conversar com amigos ou familiares", perfil: "inteligência interpessoal" },
            { texto: "Refletir sobre suas emoções e pensamentos", perfil: "inteligência intrapessoal" }
        ]
    },
    {
        texto: "Qual seu tipo de viagem preferido?",
        respostas: [
            { texto: "Viagens para lugares com muita arte, arquitetura e cultura", perfil: "inteligência visual-espacial" },
            { texto: "Viagens para lugares com muita história e tradição", perfil: "inteligência linguística" },
            { texto: "Viagens para lugares com muitas atividades esportistas ou de aventura", perfil: "inteligência corporal-cinestésica" }
        ]
    },
    {
        texto: "Como você prefere aprender novas habilidades?",
        respostas: [
            { texto: "Assistindo videos, diagramas ou imagens", perfil: "inteligência visual-espacial" },
            { texto: "Lendo livros ou artigos", perfil: "inteligência linguística" },
            { texto: "Praticando diretamente", perfil: "inteligência corporal-cinestésica" }
        ]
    },
    {
        texto: "Como você geralmente se comunica com as pessoas?",
        respostas: [
            { texto: "Usando gestos, expressões faciais e desenhos", perfil: "inteligência visual-espacial" },
            { texto: "Usando palavras, histórias ou exemplos", perfil: "inteligência linguística" },
            { texto: "Usando lógica, fatos e argumentos", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você lida com emoções ou conflitos?",
        respostas: [
            { texto: "Expressando emoções de forma artística, por exemplo, através de música ou pintura", perfil: "inteligência visual-espacial" },
            { texto: "Analisando e interpretando as emoções, por exemplo, através de conversas e terapias", perfil: "inteligência linguística" },
            { texto: "Resolvendo conflitos de forma lógica e com argumentos", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você costuma se organizar?",
        respostas: [
            { texto: "Usando imagens, diagramas e cores para se orientar", perfil: "inteligência visual-espacial" },
            { texto: "Escrevendo listas e anotações para se orientar", perfil: "inteligência linguística" },
            { texto: "Usando fórmulas, tabelas ou gráficos para se orientar", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual sua forma preferida de lazer?",
        respostas: [
            { texto: "Assistir a filmes ou séries ou programas de televisão", perfil: "inteligência visual-espacial" },
            { texto: "Ler livros, blogs ou artigos", perfil: "inteligência linguística" },
            { texto: "Resolver quebra-cabeças ou jogos lógicos", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Qual sua forma preferida de expressão pessoal?",
        respostas: [
            { texto: "Dança, teatro ou outras formas de expressão artística", perfil: "inteligência corporal-cinestésica" },
            { texto: "Escrever, falar ou debater sobre temas importantes", perfil: "inteligência linguística" },
            { texto: "Criar e solucionar problemas in jogos ou outros desafios", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você gosta de passar seu tempo livre?",
        respostas: [
            { texto: "Explorando novas áreas e lugares", perfil: "inteligência visual-espacial" },
            { texto: "Interagindo com amigos ou familiares", perfil: "inteligência interpessoal" },
            { texto: "Trabalhando em projetos pessoais ou hobbies", perfil: "inteligência intrapessoal" }
        ]
    },
    {
        texto: "Qual sua forma preferida de exercícios físicos?",
        respostas: [
            { texto: "Dança, yoga ou outras atividades que exigem coordenação motora", perfil: "inteligência corporal-cinestésica" },
            { texto: "Esportes em equipe que exigem interação e comunicação", perfil: "inteligência interpessoal" },
            { texto: "Esportes individuais que exigem estratégia e habilidades motoras finas", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como geralmente você resolve problemas no dia a dia?",
        respostas: [
            { texto: "Visualizando a situação e imaginando soluções criativas", perfil: "inteligência visual-espacial" },
            { texto: "Pensando em soluções lógicas e sistemáticas", perfil: "inteligência lógico-matemática" },
            { texto: "Consultando amigos e familiares considerando seus conselhos", perfil: "inteligência interpessoal" }
        ]
    },
    {
        texto: "Como você gosta de passar seu tempo livre?",
        respostas: [
            { texto: "Ouvindo música, tocando instrumentos ou cantando", perfil: "inteligência musical" },
            { texto: "Lendo, escrevendo ou falando sobre temas complexos", perfil: "inteligência linguística" },
            { texto: "Desafiando-se com jogos ou atividades que exigem pensamento estratégico", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você prefere se expressar em ambientes sociais?",
        respostas: [
            { texto: "Dançando, cantando ou outras formas de expressão corporal", perfil: "inteligência corporal-cinestésica" },
            { texto: "Usando palavras e histórias para se comunicar e interagir", perfil: "inteligência linguística" },
            { texto: "Observando e interpretando as dinâmicas sociais", perfil: "inteligência interpessoal" }
        ]
    },
    {
        texto: "Como você gosta de experimentar novas comidas ou bebidas?",
        respostas: [
            { texto: "Usando olfato, a visão e o paladar para explorar sabores e texturas", perfil: "inteligência visual-espacial" },
            { texto: "Pesquisando e aprendendo sobre a culinária local", perfil: "inteligência linguística" },
            { texto: "Analisando e comparando diferentes ingredientes e técnicas de preparo", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você prefere aprender sobre outras culturas?",
        respostas: [
            { texto: "Participando de eventos culturais, festivais e exposições", perfil: "inteligência visual-espacial" },
            { texto: "Lendo livros e artigos sobre diferentes tradições e costumes", perfil: "inteligência linguística" },
            { texto: "Analisando e comparando diferentes aspectos culturais, como história, culinária, arte e música", perfil: "inteligência lógico-matemática" }
        ]
    },
    {
        texto: "Como você geralmente se motiva para alcançar seus objetivos?",
        respostas: [
            { texto: "Usando a imaginação e a visualização para se inspirar e motivar", perfil: "inteligência visual-espacial" },
            { texto: "Usando palavras, histórias e citações para se inspirar e motivar", perfil: "inteligência linguística" },
            { texto: "Usando lógica, análise e estratégia para se inspirar e motivar", perfil: "inteligência lógico-matemática" }
        ]
    }
];

// Mapeamento correto dos 6 perfis disponíveis no objeto de pontuação
const perfisInfo = {
    "inteligência visual-espacial": { titulo: "Visionário Criativo", descricao: "Você aprende melhor através de imagens, cores, formas e visualizações mentais." },
    "inteligência linguística": { titulo: "Comunicador Natural", descricao: "Você possui facilidade com palavras, leitura e comunicação." },
    "inteligência lógico-matemática": { titulo: "Pensador Estratégico", descricao: "Você aprende através da lógica, análise e resolução de problemas." },
    "inteligência corporal-cinestésica": { titulo: "Aprendiz em Movimento", descricao: "Você aprende melhor através da prática e movimento." },
    "inteligência interpessoal": { titulo: "Conector Social", descricao: "Você aprende melhor interagindo com outras pessoas." },
    "inteligência intrapessoal": { titulo: "Explorador Interior", descricao: "Você aprende melhor refletindo e observando." },
    "inteligência musical": { titulo: "Mente Musical", descricao: "Você possui forte sensibilidade a ritmos, tons e timbres musicais." }
};

// ===============================
// 📌 VARIÁVEIS DE CONTROLE
// ===============================
let perguntaAtual = 0;
let respostaSelecionada = null;

const pontuacao = {
    "inteligência visual-espacial": 0,
    "inteligência linguística": 0,
    "inteligência lógico-matemática": 0,
    "inteligência corporal-cinestésica": 0,
    "inteligência interpessoal": 0,
    "inteligência intrapessoal": 0,
    "inteligência musical": 0
};

let usuario = {};
const graficos = {};
const animacoes = {};

// ===============================
// 📌 INÍCIO DO QUIZ (TELA INTRO)
// ===============================
document.getElementById("btnComecar").onclick = () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    if (!email) {
        alert("O email é obrigatório!");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Digite um email válido!");
        return;
    }

    usuario = { nome, email, idade };
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrarPergunta();
};

// ===============================
// 📌 MOSTRAR PERGUNTA
// ===============================
function mostrarPergunta() {
    const p = perguntas[perguntaAtual];
    document.getElementById("textoPergunta").innerText = p.texto;

    const respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";
    respostaSelecionada = null;

    p.respostas.forEach((resposta) => {
        const div = document.createElement("div");
        div.classList.add("opcao");
        div.innerText = resposta.texto;

        div.onclick = () => {
            document.querySelectorAll(".opcao").forEach(o => o.classList.remove("selecionada"));
            div.classList.add("selecionada");
            respostaSelecionada = resposta.perfil;
        };
        respostasDiv.appendChild(div);
    });

    atualizarProgresso();
}

function atualizarProgresso() {
    const progresso = document.querySelector(".progresso");
    const textoTopo = document.querySelector(".topo span:first-child");
    const textoPorcentagem = document.querySelector(".topo span:last-child");

    const porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;
    progresso.style.width = porcentagem + "%";
    textoTopo.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    textoPorcentagem.innerText = Math.round(porcentagem) + "%";
}

// ===============================
// 📌 BOTÃO PRÓXIMA
// ===============================
document.getElementById("btnProximo").onclick = () => {
    if (!respostaSelecionada) {
        alert("Selecione uma opção!");
        return;
    }

    if (pontuacao.hasOwnProperty(respostaSelecionada)) {
        pontuacao[respostaSelecionada]++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
};

// ===============================
//  PORCENTAGENS
// ===============================
function normalizarPorcentagens(obj) {
    let soma = 0;
    for (const chave in obj) {
        obj[chave] = Math.round(obj[chave]);
        soma += obj[chave];
    }
    const diferenca = 100 - soma;
    const primeiraChave = Object.keys(obj)[0];
    if (primeiraChave) {
        obj[primeiraChave] += diferenca;
    }
    return obj;
}

// ===============================
//  MOSTRAR RESULTADO 
// ===============================
function mostrarResultado() {
    if (resultadoJaMostrado) return;
    resultadoJaMostrado = true;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const totalRespostas = Object.values(pontuacao).reduce((a, b) => a + b, 0);
    if (totalRespostas <= 0) return;

    const porcentagens = {};
    for (const perfil in pontuacao) {
        porcentagens[perfil] = (pontuacao[perfil] / totalRespostas) * 100;
    }

    normalizarPorcentagens(porcentagens);

    const cores = ["#6C5CE7", "#00CEC9", "#FAB1A0", "#00B894", "#0984E3", "#E17055", "#FDCB6E"];

    // Captura com segurança todos os blocos ".grafico-item" do HTML
    const itensGraficoDOM = document.querySelectorAll(".grafico-item");

    Object.entries(porcentagens).forEach((item, index) => {
        const nomePerfil = item[0];
        const valor = item[1];

        // Se o seu HTML só possui 6 caixas de gráficos criadas, pulamos para não travar o JS
        if (index >= itensGraficoDOM.length) return;

        const containerAtual = itensGraficoDOM[index];

        // Atualiza a legenda (<p>) interna desse bloco específico
        const tagP = containerAtual.querySelector("p");
        if (tagP && perfisInfo[nomePerfil]) {
            tagP.innerText = perfisInfo[nomePerfil].titulo;
        }

        // Renderiza o gráfico do ChartJS e roda a animação
        criarGrafico(`grafico${index + 1}`, valor, cores[index]);
        animarNumero(`p${index + 1}`, valor);
    });

    // Encontra o perfil dominante
    let perfilDominante = "";
    let maiorPontuacao = -1;

    for (const perfil in pontuacao) {
        if (pontuacao[perfil] > maiorPontuacao) {
            maiorPontuacao = pontuacao[perfil];
            perfilDominante = perfil;
        }
    }

    // Altera os textos de perfil ideais no rodapé
    if (perfisInfo[perfilDominante]) {
        document.getElementById("tituloPerfil").innerText = perfisInfo[perfilDominante].titulo;
        document.getElementById("descricaoPerfil").innerText = perfisInfo[perfilDominante].descricao;
    }
}

// ===============================
//  CRIAR GRÁFICO (Chart.js)
// ===============================
function criarGrafico(id, valor, cor) {
    const canvas = document.getElementById(id);
    if (!canvas) return;

    if (graficos[id]) {
        graficos[id].destroy();
    }

    graficos[id] = new Chart(canvas, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [valor, 100 - valor],
                backgroundColor: [cor, "#eee"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: "75%",
            animation: {
                animateRotate: true,
                duration: 1500
            },
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });
}

// ===============================
//  ANIMAR PORCENTAGEM
// ===============================
function animarNumero(id, valorFinal) {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    if (animacoes[id]) {
        clearInterval(animacoes[id]);
    }

    valorFinal = Math.round(valorFinal);
    valorFinal = Math.min(Math.max(valorFinal, 0), 100);

    if (valorFinal === 0) {
        elemento.innerText = "0%";
        return;
    }

    let atual = 0;
    animacoes[id] = setInterval(() => {
        atual++;
        elemento.innerText = atual + "%";

        if (atual >= valorFinal) {
            elemento.innerText = valorFinal + "%";
            clearInterval(animacoes[id]);
        }
    }, 20);
}