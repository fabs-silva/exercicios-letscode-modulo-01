//Exercício 01
//Com o Math.random()
async function retornaTriviaNumero() {
    const numero = Math.floor(Math.random() * 1000);
    const response = await fetch(`http://numbersapi.com/${numero}/trivia`);

    const info = await response.text();

    console.log(`Did you know that ${info}`);

}

//Com a API
async function retornaTriviaNumeroApi() {
    const response = await fetch(`http://numbersapi.com/random/trivia?min=1&max=1000`);

    const info = await response.text();

    console.log(`Did you know that ${info}`);

}

//Exercício 02
//Com o Math.random()
async function retornaFatoMatematicoRandom() {
    const numero = Math.floor(Math.random() * 1000);
    const response = await fetch(`http://numbersapi.com/${numero}/math`);

    const info = await response.text();

    console.log(`Did you know that ${info}`);

}

//Com a API
async function retornaFatoMatematicoApi() {
    const response = await fetch(`http://numbersapi.com/random/math?min=1&max=1000`);

    const info = await response.text();

    console.log(`Did you know that ${info}`);

}

//Exercício 03
async function retornaTriviaAniversario() {
    const dia = parseInt(prompt("What is your birth day?"));
    const mes = parseInt(prompt("And what is your birth month?"));
    const response = await fetch(`http://numbersapi.com/${mes}/${dia}/date`);

    const info = await response.text();

    console.log(`Did you know that on ${info}`);

}

//Exercício 04
async function retornaNomeAniversario() {
    let arrayPersonagens = [];

    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://swapi.dev/api/people/?page=${i}`);
        const info = await response.json();

        for (let personagem of info.results) {
            arrayPersonagens = [...arrayPersonagens, { name: personagem.name, birth_year: personagem.birth_year }];
        }
    }

    console.log(arrayPersonagens);

}

//Exercício 05
async function retornaNomeAniversarioPlaneta() {
    let arrayPersonagens = [];
    let arrayPlanetas = [];

    for (let i = 1; i <= 6; i++) {

        const responsePlaneta = await fetch(`https://swapi.dev/api/planets/?page=${i}`);
        const infoPlaneta = await responsePlaneta.json();

        for (let planeta of infoPlaneta.results) {
            arrayPlanetas = [...arrayPlanetas, { name: planeta.name, residents: planeta.residents }];
        }

    }


    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://swapi.dev/api/people/?page=${i}`);
        const info = await response.json();

        for (let personagem of info.results) {
            const url = personagem.url;
            let planeta = arrayPlanetas.find(p => {
                if (p.residents.find(r => r === url)) {
                    return p.name;
                }
            });

            arrayPersonagens = [...arrayPersonagens, { name: personagem.name, birth_year: personagem.birth_year, planet: planeta.name }];
        }
    }

    console.log(arrayPersonagens);

}

//Exercício 06
async function retornaPersonagensFilmeQuatro() {
    const response = await fetch(`https://swapi.dev/api/films/4/`);
    const info = await response.json();
    const linksPersonagens = info.characters;
    let personagensFilme = [];

    for (let personagem of linksPersonagens) {
        const responsePersonagem = await fetch(personagem);
        const infoPersonagem = await responsePersonagem.json();
        personagensFilme = [...personagensFilme, infoPersonagem.name];

    }

    console.log(personagensFilme);

}

//Exercício 07
const API_KEY = 'G49VJ6Z9VKKTKEVR';

async function valoresAberturaFechamento() {
    const acao = prompt("Digite o nome de uma ação:");
    let dadosAcao = [];

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${acao}&apikey=${API_KEY}`);
    const info = await response.json();

    for (let i = 0; i < 7; i++) {
        dadosAcao = [...dadosAcao, {
            data: Object.keys(info["Time Series (Daily)"])[i],
            valor_abertura: Object.values(info["Time Series (Daily)"])[i]["1. open"],
            valor_fechamento: Object.values(info["Time Series (Daily)"])[i]["4. close"]
        }];
    }

    console.log(dadosAcao);

}

//Exercício 08
async function oscilacaoAcoes() {
    const acao = prompt("Digite o nome de uma ação:");
    let dadosAcao = [];
    let i = 0;

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${acao}&outputsize=full&apikey=${API_KEY}`);
    const info = await response.json();

    const timeSeries = info["Time Series (Daily)"];

    let teste = Object.entries(timeSeries).map(t => {
        const abertura = Object.values(t)[1]["1. open"];
        const high = Object.values(t)[1]["2. high"];
        const low = Object.values(t)[1]["3. low"];
        const fechamento = Object.values(t)[1]["4. close"];
        const tipo_oscilacao = fechamento - abertura > 0 ? 'positiva' : 'negativa';

        return {
            data: Object.values(t)[0],
            valor_abertura: abertura,
            valor_fechamento: fechamento,
            valor_maximo: high,
            valor_minimo: low,
            oscilacao: high - low,
            tipo_oscilacao,
            magnitude: `${(((high / low) * 100) - 100).toFixed(2)}%`,
        };
    });

    console.log(teste.reduce((prev, curr) => prev.oscilacao > curr.oscilacao ? prev : curr));

}

//Exercício 09
async function conversaoMoedas() {
    const moeda_origem = prompt("Digite a moeda que você deseja converter:");
    const moeda_destino = prompt("Digite a moeda para qual será convertida:");
    const valor = parseFloat(prompt("Digite o valor a ser convertido:"));

    const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${moeda_origem}&to_currency=${moeda_destino}&apikey=${API_KEY}`);
    const info = await response.json();

    console.log(`${valor} ${info["Realtime Currency Exchange Rate"]["2. From_Currency Name"]} em ${info["Realtime Currency Exchange Rate"]["4. To_Currency Name"]} valem ${info["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * valor}`)

}

//Exercicio 10
async function mmaAcoes() {
    const acao = prompt("Digite o nome de uma ação:");
    let dadosAcao = [];

    const response = await fetch(`https://www.alphavantage.co/query?function=SMA&symbol=${acao}&interval=daily&&time_period=5&series_type=close&apikey=${API_KEY}`);
    const info = await response.json();

    const sma = Object.entries(info["Technical Analysis: SMA"]);

    sma.forEach(entry => {
        if (entry[0].includes("2022")) {
            dadosAcao = [...dadosAcao, {
                data: entry[0],
                sma: entry[1]["SMA"],
            }]
        }

    })

    return dadosAcao;
}


//Exercicio 10
async function descendenteAscendente() {
    let dadosMma = await mmaAcoes();
    let dadosAcao = [];

    for (let i = 1; i < dadosMma.length; i++) {
        if (parseFloat(dadosMma[i - 1]["sma"]) > parseFloat(dadosMma[i]["sma"])) {
            dadosAcao = [...dadosAcao, `${dadosMma[i]["data"]} - descendente`];
        } else if (parseFloat(dadosMma[i - 1]["sma"]) === parseFloat(dadosMma[i]["sma"])) {
            dadosAcao = [...dadosAcao, `${dadosMma[i]["data"]} - igual`];
        } else {
            dadosAcao = [...dadosAcao, `${dadosMma[i]["data"]} - ascendente`];
        }
    }

    console.log(dadosAcao);

}