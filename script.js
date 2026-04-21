// ===============================
// 📌 DADOS DAS PERGUNTAS
// ===============================

const perguntas = [
    {
        texto: "Como você prefere aprender um novo idioma?",
        respostas: [
            { texto: "Conversando com nativos", perfil: "social" },
            { texto: "Estudando gramática", perfil: "analitico" },
            { texto: "Assistindo filmes", perfil: "criativo" },
            { texto: "Lendo e escrevendo", perfil: "investigativo" }
        ]
    },
    {
        texto: "Qual atividade você prefere?",
        respostas: [
            { texto: "Resolver problemas", perfil: "analitico" },
            { texto: "Criar algo novo", perfil: "criativo" },
            { texto: "Ajudar pessoas", perfil: "social" },
            { texto: "Pesquisar assuntos", perfil: "investigativo" }
        ]
    },

    {
        texto: "Qual seu hobby?",
        respostas: [
            { texto: "ler livros", perfil: "analitico" },
            { texto: "pintar", perfil: "criativo" },
            { texto: "estudar sociologia", perfil: "social" },
            { texto: "assistir filmes", perfil: "investigativo" }
        ]
    }
    // 👉 depois você adiciona até 25 perguntas
];


// ===============================
// 📌 VARIÁVEIS DE CONTROLE
// ===============================

// controla qual pergunta está sendo exibida
let perguntaAtual = 0;

// armazena a resposta escolhida na pergunta atual
let respostaSelecionada = null;

// armazena os pontos de cada perfil
const pontuacao = {
    analitico: 0,
    criativo: 0,
    social: 0,
    investigativo: 0
};

// armazena dados do usuário
let usuario = {};


// ===============================
// 📌 INÍCIO DO QUIZ (TELA INTRO)
// ===============================

document.getElementById("btnComecar").onclick = () => {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    // validação de email obrigatório
    if (!email) {
        alert("O email é obrigatório!");
        return;
    }

    // validação de formato de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um email válido!");
        return;
    }

    // salva dados do usuário
    usuario = { nome, email, idade };

    // troca de telas
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // inicia o quiz
    mostrarPergunta();
};


// ===============================
// 📌 MOSTRAR PERGUNTA
// ===============================

function mostrarPergunta() {

    const p = perguntas[perguntaAtual];

    // atualiza o texto da pergunta
    document.querySelector(".pergunta").innerText = p.texto;

    // pega o container das respostas
    const respostasDiv = document.getElementById("respostas");

    // limpa respostas anteriores
    respostasDiv.innerHTML = "";

    // reset da seleção
    respostaSelecionada = null;

    // cria as opções dinamicamente
    p.respostas.forEach((resposta) => {

        const div = document.createElement("div");
        div.classList.add("opcao");
        div.innerText = resposta.texto;

        // quando clicar em uma opção
        div.onclick = () => {

            // remove seleção anterior
            document.querySelectorAll(".opcao").forEach(o => {
                o.classList.remove("selecionada");
            });

            // marca a atual
            div.classList.add("selecionada");

            // salva perfil escolhido
            respostaSelecionada = resposta.perfil;
        };

        respostasDiv.appendChild(div);
    });

    // atualiza barra de progresso
    atualizarProgresso();
}


// ===============================
// 📌 BARRA DE PROGRESSO
// ===============================

function atualizarProgresso() {

    const progresso = document.querySelector(".progresso");
    const textoTopo = document.querySelector(".topo span:first-child");
    const textoPorcentagem = document.querySelector(".topo span:last-child");

    // calcula porcentagem
    const porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;

    // atualiza UI
    progresso.style.width = porcentagem + "%";
    textoTopo.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    textoPorcentagem.innerText = Math.round(porcentagem) + "%";
}


// ===============================
// 📌 BOTÃO PRÓXIMA
// ===============================

document.getElementById("btnProximo").onclick = () => {

    // verifica se respondeu
    if (!respostaSelecionada) {
        alert("Selecione uma opção!");
        return;
    }

    // soma ponto no perfil escolhido
    pontuacao[respostaSelecionada]++;

    // vai para próxima pergunta
    perguntaAtual++;

    // verifica se ainda tem perguntas
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
};


// ===============================
// 📌 RESULTADO FINAL
// ===============================

const perfisInfo = {
    analitico: {
        titulo: "Pensador Estratégico",
        descricao: "Você aprende melhor com estrutura, lógica e planejamento. Prefere entender regras antes de aplicar."
    },
    criativo: {
        titulo: "Explorador Criativo",
        descricao: "Você aprende melhor experimentando e criando. Ambientes dinâmicos e visuais são ideais."
    },
    social: {
        titulo: "Comunicador Global",
        descricao: "Você aprende melhor através da prática e interação social. Sua abordagem é comunicativa e você não tem medo de errar. Cursos com foco em conversação e imersão cultural são ideais para você."
    },
    investigativo: {
        titulo: "Pesquisador Independente",
        descricao: "Você prefere aprender sozinho, explorando conteúdos em profundidade e no seu próprio ritmo."
    }
};

function mostrarResultado() {

    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const total = Object.values(pontuacao).reduce((a, b) => a + b, 0);

    const porcentagens = {
        analitico: ((pontuacao.analitico / total) * 100),
        criativo: ((pontuacao.criativo / total) * 100),
        social: ((pontuacao.social / total) * 100),
        investigativo: ((pontuacao.investigativo / total) * 100)
    };

    criarGrafico("grafico1", porcentagens.analitico, "#6C5CE7");
    criarGrafico("grafico2", porcentagens.criativo, "#00CEC9");
    criarGrafico("grafico3", porcentagens.social, "#FAB1A0");
    criarGrafico("grafico4", porcentagens.investigativo, "#00B894");

    animarNumero("p1", porcentagens.analitico);
    animarNumero("p2", porcentagens.criativo);
    animarNumero("p3", porcentagens.social);
    animarNumero("p4", porcentagens.investigativo);

    // descobrir perfil com maior pontuação
    let perfilDominante = null;
    let maiorValor = 0;

    for (let perfil in pontuacao) {
        if (pontuacao[perfil] > maiorValor) {
            maiorValor = pontuacao[perfil];
            perfilDominante = perfil;
        }
    }
    const titulo = document.getElementById("tituloPerfil");
    const descricao = document.getElementById("descricaoPerfil");

    titulo.innerText = perfisInfo[perfilDominante].titulo;
    descricao.innerText = perfisInfo[perfilDominante].descricao;
}

function criarGrafico(id, valor, cor) {

    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [valor, 100 - valor],
                backgroundColor: [cor, "#eee"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "75%",
            animation: {
                animateRotate: true,
                duration: 1500
            },
            plugins: {
                tooltip: { enabled: false }
            }
        }
    });
}

function animarNumero(id, valorFinal) {
    let atual = 0;
    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {
        atual += 1;

        if (atual >= valorFinal) {
            atual = valorFinal;
            clearInterval(intervalo);
        }

        elemento.innerText = Math.round(atual) + "%";

    }, 20);
}