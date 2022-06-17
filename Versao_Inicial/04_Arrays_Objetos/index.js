//Exercício 01 - Push
const arrayOriginal = [12, 5, 8, 130, 44];
const arrayMenorDez = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < 10) {
        arrayMenorDez.push(arrayOriginal[i]);
    }
}

for (let i = 0; i < arrayMenorDez.length; i++) {
    if (arrayOriginal.includes(arrayMenorDez[i])) {
        arrayOriginal.splice(arrayOriginal.indexOf(arrayMenorDez[i]), 1);
    }
}

//Exercício 01 - Spread e HOF
const arrayOriginal = [12, 5, 8, 130, 44];
let arrayMenorDez = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < 10) {
        arrayMenorDez = [...arrayMenorDez, arrayOriginal[i]];
    }
}

for (let i = 0; i < arrayMenorDez.length; i++) {
    if (arrayOriginal.find(numero => numero === arrayMenorDez[i])) {
        arrayOriginal.splice(arrayOriginal.indexOf(arrayMenorDez[i]), 1);
    }
}

//Exercicio 02
function numerosUsuario() {
    let arrayUsuario = [];

    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt('Digite um número inteiro: '));
        arrayUsuario = [...arrayUsuario, numero];
    }

    return arrayUsuario.sort((n1, n2) => (n1 > n2) ? 1 : -1);
}

//Exercício 03
const ehPrimo = (numero) => {
    for (let i = 1; i <= numero; i++) {
        if ((i > 1 && i < numero) && numero % i == 0) {
            return;
        }

        if (i === numero) {
            return numero;
        }

    }
}

const arrayDePrimos = () => {
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let arrayPrimos = [];

    for (let i = 0; i < array.length; i++) {
        if (ehPrimo(array[i])) {
            arrayPrimos = [...arrayPrimos, array[i]];
        }

    }

    return arrayPrimos;
}

//Exercício 04
const cadastraCarro = () => {
    const corCarro = prompt('Qual a cor do carro?');
    const marcaCarro = prompt('Qual a marca do carro?');
    const modeloCarro = prompt('Qual o modelo do carro?');

    if (corCarro === null || marcaCarro === null || modeloCarro === null) {
        return;
    }

    alert(`Você cadastrou um ${marcaCarro} ${modeloCarro}, na cor ${corCarro}.`);

    return {
        cor: corCarro,
        marca: marcaCarro,
        modelo: modeloCarro,
    }
}

const programaCadastroCarros = () => {

    let arrayCarros = [];

    let inicioCadastro = prompt('Deseja cadastrar um novo carro?');

    while (inicioCadastro === 'S' || inicioCadastro === 's') {
        const novoCarro = cadastraCarro();

        if (novoCarro === undefined) {
            inicioCadastro = prompt('Deseja cadastrar um novo carro?');
        }

        arrayCarros = [...arrayCarros, novoCarro];
        inicioCadastro = prompt('Deseja cadastrar um novo carro?');
    }

    alert(JSON.stringify(arrayCarros));

}

//Exercício 05
const maiorNumeroArray = (array) => {

    let maiorNumero = 0;

    for (let i = 1; i <= array.length; i++) {
        if (array[i] > array[i - 1]) {
            maiorNumero = array[i];
            break;
        }
        maiorNumero = array[i - 1];
    }

    return maiorNumero;
}

//Exercício 06
const cadastraNota = (numeroProva) => {
    const notaProva = parseFloat(prompt(`Qual a nota da prova ${numeroProva}`));
    return {
        prova: numeroProva,
        nota: notaProva,
    }
}

const menorNota = (notasAluno) => {
    return notasAluno.reduce((nota1, nota2) => (nota1.nota < nota2.nota) ? nota1 : nota2);
}

const maiorNota = (notasAluno) => {
    return notasAluno.reduce((nota1, nota2) => (nota1.nota > nota2.nota) ? nota1 : nota2);
}

const mediaAluno = (notasAluno) => {
    let notasNormalizadas = [];
    let media = 0;

    if (notasAluno.length >= 4) {
        notasAluno.map((nota) => {
            if (nota !== menorNota(notasAluno) || nota !== maiorNota(notasAluno)) {
                notasNormalizadas = [...notasNormalizadas, nota];
                media += nota.nota;
            }
        })
    }

    return (media / notasNormalizadas.length).toFixed(2);
}

const programaNotas = () => {
    const numeroProvas = parseInt(prompt('Quantas provas você realizou?'));
    let notasAluno = [];

    for (let i = 0; i < numeroProvas; i++) {
        const notaProva = cadastraNota(i + 1);
        notasAluno = [...notasAluno, notaProva];
    }

    console.log(notasAluno);
    console.log(`Menor nota: ${menorNota(notasAluno).nota}, na prova ${menorNota(notasAluno).prova}`);
    console.log(`Maior nota: ${maiorNota(notasAluno).nota}, na prova ${maiorNota(notasAluno).prova}`);
    console.log(`Média do aluno: ${mediaAluno(notasAluno)}`);
}

//Exercício 07 - Console Log
const esportes = [
    {
        nome: 'futebol',
        individual: false,
        duracaoEstimadaEmMinutos: 90,
    },
    {
        nome: 'volei',
        individual: false,
        duracaoEstimadaEmMinutos: 120,
    },
    {
        nome: 'cricket',
        individual: true,
        duracaoEstimadaEmMinutos: 50,
    },
    {
        nome: 'esgrima',
        individual: true,
        duracaoEstimadaEmMinutos: 20,
    },
    {
        nome: 'squash',
        individual: true,
        duracaoEstimadaEmMinutos: 70,
    },
    {
        nome: '100m rasos',
        individual: true,
        duracaoEstimadaEmMinutos: 1,
    },
];

const programaEsportes = (esportes) => {
    const esporteIndividual = esportes.find((esporte) => esporte.individual === true);
    const esporteAbaixoQuarenta = esportes.find((esporte) => esporte.duracaoEstimadaEmMinutos < 40);
    const esportesIndividuaisAcimaVinte = esportes.filter((esporte) => esporte.individual === true && esporte.duracaoEstimadaEmMinutos > 20);

    return {
        esporteIndividual,
        esporteAbaixoQuarenta,
        esportesIndividuaisAcimaVinte.map(esp => esp)
    }

    console.log(`Esporte individual: ${esporteIndividual.nome}`);
    console.log(`Esporte abaixo de 40 minutos de duração ${esporteAbaixoQuarenta.nome}`);
    console.log(`Todos os esportes individuais acima de 20 minutos de duração: ${esportesIndividuaisAcimaVinte.map(esp => esp.nome)}`);
}

//Exercício 07 - Return

const esportes = [
    {
        nome: 'futebol',
        individual: false,
        duracaoEstimadaEmMinutos: 90,
    },
    {
        nome: 'volei',
        individual: false,
        duracaoEstimadaEmMinutos: 120,
    },
    {
        nome: 'cricket',
        individual: true,
        duracaoEstimadaEmMinutos: 50,
    },
    {
        nome: 'esgrima',
        individual: true,
        duracaoEstimadaEmMinutos: 20,
    },
    {
        nome: 'squash',
        individual: true,
        duracaoEstimadaEmMinutos: 70,
    },
    {
        nome: '100m rasos',
        individual: true,
        duracaoEstimadaEmMinutos: 1,
    },
];

const programaEsportes = (esportes) => {
    const esporteIndividual = esportes.find((esporte) => esporte.individual === true);
    const esporteAbaixoQuarenta = esportes.find((esporte) => esporte.duracaoEstimadaEmMinutos < 40);
    const esportesIndividuaisAcimaVinte = esportes.filter((esporte) => esporte.individual === true && esporte.duracaoEstimadaEmMinutos > 20);

    return {
        esporteIndividual: {
            nome: esporteIndividual.nome,
            individual: esporteIndividual.individual,
            duracaoEstimadaEmMinutos: esporteIndividual.duracaoEstimadaEmMinutos,
        },
        esporteAbaixoQuarenta: {
            nome: esporteAbaixoQuarenta.nome,
            individual: esporteAbaixoQuarenta.individual,
            duracaoEstimadaEmMinutos: esporteAbaixoQuarenta.duracaoEstimadaEmMinutos,
        },
        esportesIndividuaisAcimaVinte: esportesIndividuaisAcimaVinte.map(esporte => {
            return {
                nome: esporte.nome,
                individual: esporte.individual,
                duracaoEstimadaEmMinutos: esporte.duracaoEstimadaEmMinutos,
            }
        })
    }
}

//Exercício 08
const usuarios = [
    {
        nome: "Zé",
        idade: 20,
        cpf: "123.456.789-01",
        email: "ze@uol.com.br",
    },
    {
        nome: "Maria",
        idade: 27,
        cpf: "123.456.789-02",
        email: "maria_meg_costa@outlook.com",
    },
    {
        nome: "Carla",
        idade: 37,
        cpf: "123.456.789-03",
        email: "carla@bol.com.br",
    },
    {
        nome: "Zeca",
        idade: 36,
        cpf: "123.456.789-03",
        email: "zecal3@msn.com",
    },
    {
        nome: "Mel",
        idade: 16,
        cpf: "123.456.789-03",
        email: "melsaf@gmail.com",
    },
];

const programaEmail = (usuarios) => {
    const email = prompt('Digite o email que você deseja procurar: ');

    const usuarioBuscado = usuarios.find(usuario => usuario.email === email);

    if (usuarioBuscado === undefined) {
        throw new Error("Usuário não encontrado");
    } else {
        return usuarioBuscado;
    }
}

//Exercício 09
const carrinho = [
    {
        produto: "Camisa branca:",
        quantidade: 4,
        valorDaUnidade: 25.50,
    },
    {
        produto: "Calça jeans:",
        quantidade: 2,
        valorDaUnidade: 180.25,
    },
    {
        produto: "Jaqueta",
        quantidade: 1,
        valorDaUnidade: 299.99,
    },
    {
        produto: "Tênis de Corrida",
        quantidade: 1,
        valorDaUnidade: 150.50,
    },
    {
        produto: "Par de meias",
        quantidade: 3,
        valorDaUnidade: 15.00,
    },
    {
        produto: "Relógio esportivo",
        quantidade: 1,
        valorDaUnidade: 350.00,
    },
];

const programaCarrinho = (carrinho) => {
    let somaValor = 0;
    const frete = 15.0;

    carrinho.map(produto => {
        somaValor += produto.valorDaUnidade * produto.quantidade;
    });

    somaValor += frete;

    console.log(`O valor da compra foi de R$ ${somaValor}`);
}

//Exercício 10
const funcionarios = [
    {
        nome: "Renata",
        area: "Vendas",
        salario: 3000,
    },
    {
        nome: "Marcela",
        area: "Dev",
        salario: 8000,
    },
    {
        nome: "Jonas",
        area: "Vendas",
        salario: 3500,
    },
    {
        nome: "Carlos",
        area: "Vendas",
        salario: 2000,
    },
    {
        nome: "Rick",
        area: "Dev",
        salario: 7000,
    },
    {
        nome: "Yara",
        area: "Finanças",
        salario: 6500,
    },
    {
        nome: "Zeca",
        area: "Finanças",
        salario: 5500,
    },
    {
        nome: "Josué",
        area: "RH",
        salario: 4500,
    },
    {
        nome: "Sheila",
        area: "RH",
        salario: 5500,
    },
    {
        nome: "Cleber",
        area: "Finanças",
        salario: 4500,
    },
];

const programaAumentoSalario = (funcionarios) => {
    const areaAtuacao = prompt('Qual a área de atuação?');

    let funcionariosAtualizado = [];

    for (let funci of funcionarios) {
        if (funci.area === areaAtuacao) {
            funcionariosAtualizado = [...funcionariosAtualizado, {
                nome: funci.nome,
                area: funci.area,
                salario: funci.salario * 1.05
            }]
        }
    };

    if (funcionariosAtualizado.length === 0) {
        return 'Não foram encontrados usuários para sua busca'
    }

    return funcionariosAtualizado;

}

//Exercício 11
const telefones = [
    {
        pais: 'BR',
        numero: '99235790',
    },
    {
        pais: 'BR',
        numero: '94342678',
    },
    {
        pais: 'FR',
        numero: '90357790',
    },
    {
        pais: 'FIN',
        numero: '99342578',
    },
    {
        pais: 'MX',
        numero: '88215857',
    },
    {
        pais: 'LUX',
        numero: '37654864',
    },
    {
        pais: 'CL',
        numero: '43647344',
    },
    {
        pais: 'FR',
        numero: '34646346',
    },
    {
        pais: 'EG',
        numero: '32632864',
    },
];

const ddi = {
    'BR': 55,
    'CL': 56,
    'EG': 20,
    'FIN': 358,
    'FR': 33,
    'LUX': 352,
    'MX': 52,
};

const programaDdi = (telefones, ddi) => {

    const ddiPais = (telefone) => {
        if (telefone.pais in ddi) {
            return ddi[telefone.pais]
        }
    };

    const telefonesAtualizados = telefones.map(telefone => {
        return {
            pais: telefone.pais,
            numero: '+' + ddiPais(telefone) + ' ' + telefone.numero,
        }
    });

    return telefonesAtualizados;
};