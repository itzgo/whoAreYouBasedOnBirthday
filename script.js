const signos = [
    {
        nome: "Áries",
        inicio: [3, 21],
        fim: [4, 19],
        decanatos: [
            { nome: "O Guerreiro", personagem: "Goku", imagem: "goku.webp", descricao: "Representa iniciativa, coragem e espírito competitivo. É alguém que encara desafios de frente e vê os obstáculos como oportunidades para se superar." },
            { nome: "O Campeão", personagem: "All Might", imagem: "all-might.webp", descricao: "Representa coragem, liderança e proteção. É o arquétipo de quem assume responsabilidades e inspira os outros a seguirem em frente." },
            { nome: "O Conquistador", personagem: "Kratos", imagem: "kratos.webp", descricao: "Representa determinação, força de vontade e persistência. Quando estabelece um objetivo, dificilmente abandona o caminho até alcançá-lo." }
        ]
    },
    {
        nome: "Touro",
        inicio: [4, 20],
        fim: [5, 20],
        decanatos: [
            { nome: "O Guardião", personagem: "Leonardo", imagem: "leonardo.webp", descricao: "Representa estabilidade, responsabilidade e proteção. É aquele que prefere manter seu grupo seguro e preservar aquilo que considera importante." },
            { nome: "O Hedonista", personagem: "Garfield", imagem: "garfield.webp", descricao: "Representa conforto, prazer e apreciação das coisas boas da vida. Comer bem, descansar e evitar sofrimento desnecessário são prioridades." },
            { nome: "O Determinado", personagem: "Hulk", imagem: "hulk.webp", descricao: "Representa força, resistência e obstinação. Uma vez que decide seguir determinado caminho, é extremamente difícil fazê-lo desistir." }
        ]
    },
    {
        nome: "Gêmeos",
        inicio: [5, 21],
        fim: [6, 20],
        decanatos: [
            { nome: "O Comunicador", personagem: "Spider-Man", imagem: "spider-man.webp", descricao: "Representa comunicação, humor e inteligência social. Usa palavras, improvisação e criatividade para lidar com praticamente qualquer situação." },
            { nome: "O Curioso", personagem: "Rick Sanchez", imagem: "rick.webp", descricao: "Representa curiosidade intelectual e busca incessante por conhecimento. Sempre existe alguma coisa nova para descobrir, testar ou questionar." },
            { nome: "O Camaleão", personagem: "Mystique", imagem: "mystique.webp", descricao: "Representa adaptação, versatilidade e capacidade de mudar conforme as circunstâncias. Sua maior vantagem é nunca precisar permanecer igual." }
        ]
    },
    {
        nome: "Câncer",
        inicio: [6, 21],
        fim: [7, 22],
        decanatos: [
            { nome: "O Protetor", personagem: "Superman", imagem: "superman.webp", descricao: "Representa proteção, empatia e responsabilidade. Sua força existe principalmente para defender aqueles que não conseguem se defender sozinhos." },
            { nome: "O Sensível", personagem: "Hinata Hyuga", imagem: "hinata.webp", descricao: "Representa sensibilidade, introspecção e profundidade emocional. Observa muito, sente intensamente e valoriza profundamente seus vínculos." },
            { nome: "O Patriarca", personagem: "Mufasa", imagem: "mufasa.webp", descricao: "Representa família, orientação e responsabilidade. É a figura que protege, aconselha e prepara os outros para enfrentar a própria jornada." }
        ]
    },
    {
        nome: "Leão",
        inicio: [7, 23],
        fim: [8, 22],
        decanatos: [
            { nome: "O Rei", personagem: "Simba", imagem: "simba.webp", descricao: "Representa liderança, identidade e orgulho. Aprende a assumir seu lugar e compreender que liderança também significa responsabilidade." },
            { nome: "O Artista", personagem: "Bruno Madrigal", imagem: "bruno.webp", descricao: "Representa criatividade, individualidade e expressão pessoal. É alguém que não se encaixa facilmente nas expectativas dos outros." },
            { nome: "O Herói", personagem: "Sailor Moon", imagem: "sailor-moon.webp", descricao: "Representa heroísmo, presença e capacidade de inspirar. Mesmo diante de dificuldades, encontra forças para proteger aqueles que ama." }
        ]
    },
    {
        nome: "Virgem",
        inicio: [8, 23],
        fim: [9, 22],
        decanatos: [
            { nome: "O Analista", personagem: "Batman", imagem: "batman.webp", descricao: "Representa investigação, planejamento e atenção aos detalhes. Antes de agir, procura compreender o problema e encontrar uma estratégia." },
            { nome: "O Cientista", personagem: "Senku Ishigami", imagem: "senku.webp", descricao: "Representa racionalidade, conhecimento e experimentação. Diante de um problema, sua primeira reação é descobrir como ele funciona." },
            { nome: "O Perfeccionista", personagem: "Levi Ackerman", imagem: "levi.webp", descricao: "Representa disciplina, precisão e busca pela excelência. Seu padrão de exigência consigo mesmo e com os outros é extremamente elevado." }
        ]
    },
    {
        nome: "Libra",
        inicio: [9, 23],
        fim: [10, 22],
        decanatos: [
            { nome: "O Diplomata", personagem: "Charles Xavier", imagem: "xavier.webp", descricao: "Representa negociação, diálogo e busca por coexistência. Prefere compreender diferentes lados antes de recorrer ao conflito." },
            { nome: "O Esteta", personagem: "Dio Brando", imagem: "dio.webp", descricao: "Representa estética, presença e teatralidade. A aparência, o estilo e a forma como é percebido fazem parte de sua identidade." },
            { nome: "O Mediador", personagem: "Wonder Woman", imagem: "wonder-woman.webp", descricao: "Representa equilíbrio entre força e diplomacia. É capaz de lutar quando necessário, mas também busca resolver conflitos através do diálogo." }
        ]
    },
    {
        nome: "Escorpião",
        inicio: [10, 23],
        fim: [11, 21],
        decanatos: [
            { nome: "O Investigador", personagem: "L", imagem: "l.webp", descricao: "Representa investigação, mistério e obsessão pela verdade. Não se satisfaz com explicações superficiais e procura descobrir o que está escondido." },
            { nome: "O Manipulador", personagem: "Makima", imagem: "makima.webp", descricao: "Representa controle, estratégia e influência psicológica. Prefere compreender as pessoas e situações antes de revelar suas próprias intenções." },
            { nome: "O Renascido", personagem: "Dabi", imagem: "dabi.webp", descricao: "Representa transformação através de experiências intensas. É o arquétipo de quem passa por mudanças profundas e emerge como uma pessoa diferente." }
        ]
    },
    {
        nome: "Sagitário",
        inicio: [11, 22],
        fim: [12, 21],
        decanatos: [
            { nome: "O Aventureiro", personagem: "Monkey D. Luffy", imagem: "luffy.webp", descricao: "Representa liberdade, aventura e exploração. O mundo existe para ser descoberto e a vida deve ser vivida sem ficar presa a limitações." },
            { nome: "O Explorador", personagem: "Finn", imagem: "finn.webp", descricao: "Representa curiosidade, aventura e disposição para experimentar coisas novas. Cada jornada pode se transformar em uma nova história." },
            { nome: "O Filósofo", personagem: "Master Oogway", imagem: "oogway.webp", descricao: "Representa sabedoria, reflexão e busca por significado. Procura enxergar além dos acontecimentos imediatos e compreender a jornada." }
        ]
    },
    {
        nome: "Capricórnio",
        inicio: [12, 22],
        fim: [1, 19],
        decanatos: [
            { nome: "O Estrategista", personagem: "Light Yagami", imagem: "light.webp", descricao: "Representa planejamento, ambição e pensamento estratégico. Cada movimento é pensado levando em consideração suas consequências futuras." },
            { nome: "O Governante", personagem: "T'Challa", imagem: "tchalla.webp", descricao: "Representa liderança, tradição e responsabilidade. O poder é visto principalmente como uma obrigação para com aqueles que dependem de você." },
            { nome: "O Trabalhador", personagem: "Rock Lee", imagem: "rock-lee.webp", descricao: "Representa disciplina, esforço e perseverança. Mesmo sem possuir vantagens naturais, acredita que dedicação pode superar limitações." }
        ]
    },
    {
        nome: "Aquário",
        inicio: [1, 20],
        fim: [2, 18],
        decanatos: [
            { nome: "O Visionário", personagem: "Tony Stark", imagem: "tony-stark.webp", descricao: "Representa inovação, criatividade e pensamento fora do padrão. Enxerga possibilidades onde outras pessoas ainda não conseguem." },
            { nome: "O Rebelde", personagem: "Harley Quinn", imagem: "harley-quinn.webp", descricao: "Representa independência, irreverência e rejeição às convenções. Não gosta de seguir regras simplesmente porque sempre existiram." },
            { nome: "O Revolucionário", personagem: "V", imagem: "v.webp", descricao: "Representa ruptura e transformação. Questiona estruturas estabelecidas e acredita que mudanças profundas exigem romper com o sistema." }
        ]
    },
    {
        nome: "Peixes",
        inicio: [2, 19],
        fim: [3, 20],
        decanatos: [
            { nome: "O Sonhador", personagem: "Totoro", imagem: "totoro.webp", descricao: "Representa imaginação, fantasia e uma percepção mais emocional do mundo. Enxerga possibilidades onde outras pessoas enxergam apenas a realidade." },
            { nome: "O Empata", personagem: "Steven Universe", imagem: "steven.webp", descricao: "Representa empatia, compreensão e conexão emocional. Procura entender as pessoas antes de julgá-las." },
            { nome: "O Místico", personagem: "Doctor Strange", imagem: "doctor-strange.webp", descricao: "Representa espiritualidade, mistério e transcendência. Busca compreender dimensões da realidade que vão além do conhecimento convencional." }
        ]
    }
];

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const mesDias = { 1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };

const selectMes = document.getElementById("mes");
const selectDia = document.getElementById("dia");

function carregarMeses() {
    selectMes.innerHTML = "";
    meses.forEach((mes, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = mes;
        selectMes.appendChild(option);
    });
}

function carregarDias() {
    const mesSelecionado = parseInt(selectMes.value);
    const quantidadeDias = mesDias[mesSelecionado] || 31;
    selectDia.innerHTML = "";

    for (let i = 1; i <= quantidadeDias; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectDia.appendChild(option);
    }
}

// Converte mês e dia em "dia do ano" (0-365) para cálculo preciso do decanato
function getDiaDoAno(m, d) {
    const diasPorMes = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let soma = d;
    for (let i = 1; i < m; i++) soma += diasPorMes[i];
    return soma;
}

function obterSignoEDecanato(mes, dia) {
    const dataAlvo = getDiaDoAno(mes, dia);

    for (let signo of signos) {
        let inicio = getDiaDoAno(signo.inicio[0], signo.inicio[1]);
        let fim = getDiaDoAno(signo.fim[0], signo.fim[1]);

        // Trata Capricórnio que cruza o final do ano
        let pertenceAoSigno = false;
        if (inicio <= fim) {
            pertenceAoSigno = dataAlvo >= inicio && dataAlvo <= fim;
        } else {
            pertenceAoSigno = dataAlvo >= inicio || dataAlvo <= fim;
            if (dataAlvo <= fim) dataAlvo += 366; // Ajusta cálculo de duração
            fim += 366;
        }

        if (pertenceAoSigno) {
            const duracaoTotal = fim - inicio + 1;
            const posicao = (dataAlvo >= inicio ? dataAlvo : dataAlvo + 366) - inicio;
            let decanatoIndex = Math.floor((posicao / duracaoTotal) * 3);
            if (decanatoIndex > 2) decanatoIndex = 2; // Garantia limite

            return {
                signo: signo.nome,
                decanato: signo.decanatos[decanatoIndex]
            };
        }
    }
}

function descobrirNome() {
    const mes = parseInt(selectMes.value);
    const dia = parseInt(selectDia.value);

    const resultado = obterSignoEDecanato(mes, dia);

    if (resultado) {
        document.getElementById("signo-tag").textContent = resultado.signo;
        document.getElementById("modal-titulo").textContent = resultado.decanato.personagem;
        document.getElementById("decanato-nome").textContent = resultado.decanato.nome;
        document.getElementById("modal-imagem").src = `assets/${resultado.decanato.imagem}`;
        document.getElementById("modal-descricao").textContent = resultado.decanato.descricao;

        document.getElementById("modal").classList.remove("hidden");
    }
}

function fecharModal() {
    document.getElementById("modal").classList.add("hidden");
}

selectMes.addEventListener("change", carregarDias);

// Inicializa os selects ao carregar o script
carregarMeses();
carregarDias();