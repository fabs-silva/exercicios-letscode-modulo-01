//Exercício 01
const pessoas = [
    "Ana Peres",
    "Maria Silva",
    "Cleide Peres",
    "Carlos Levir",
    "Zeca Silva",
    "Paulo Souza",
    "Roger Guimarães",
    "Carlos de Almeida",
    "Mayk Souza",
    "Paula Guimarães",
    "Edson Souza",
    "Milena Komatsu",
    "Zé Souza",
    "Joana Batisteti",
    "Carla Zuko",
    "Bruna de Almeida",
    "Jonas Peres"
];

const geraListaSobrenomes = (listaNomes) => {
    let listaSobrenomes = [];
    for (let nome of listaNomes) {
        const sobrenome = nome.split(' ');
        if (sobrenome.includes("de")) {
            listaSobrenomes = [...listaSobrenomes, sobrenome[2]];
        } else {
            listaSobrenomes = [...listaSobrenomes, sobrenome[1]];
        }
    }
    return listaSobrenomes;
}

console.log(geraListaSobrenomes(pessoas));

const ocorrenciaSobrenomes = (listaNomes) => {
    const sobrenomes = geraListaSobrenomes(listaNomes);
    let objContagem = {};

    for (let sobrenome of sobrenomes) {
        if (!objContagem[sobrenome]) {
            objContagem[sobrenome] = 1
        } else {
            objContagem[sobrenome] += 1
        }
    }

    return objContagem;
}

//Exercício 02
const adicionaRetiraItem = (objetoItensEstoque) => {
    let itemBuscado = prompt("Digite o item a ser buscado:");
    let operacao = parseInt(prompt(`Digite a operacao desejada:\n1 - Incluir \n2 - Retirar \n`));
    let quantidade = parseInt(prompt("Digite a quantidade a ser incluida / retirada:"));

    const item = objetoItensEstoque.find(i => itemBuscado === i.item);

    if (item) {
        if (operacao === 1) {
            item.quantidade = item.quantidade += quantidade;
            alert('Operação realizada com sucesso');
            console.log(item);
        }

        if (operacao === 2) {
            if (item.quantidade >= quantidade) {
                item.quantidade = item.quantidade -= quantidade;
                alert('Operação realizada com sucesso');
                console.log(item);
            } else {
                alert('Quantidade do item insuficiente. Repita a operação!');
            }
        }
    } else {
        alert('Opção Inválida. Repita a operação!');
    }

    programaEstoque(objetoEstoque, objetoItensEstoque);
}

const exibeEstoque = (objetoEstoque, objetoItensEstoque) => {

    const objetoEstoqueFinal = objetoItensEstoque.map(item => {
        const itemEstoque = objetoEstoque.find(i => i.item === item.item);
        if (item.quantidade <= itemEstoque.quantidade_padrao * 0.2) {
            return { [itemEstoque.icone]: '🔴' };
        }

        if (item.quantidade === 0) {
            return { [itemEstoque.icone]: '❌️' };
        }

        return { [itemEstoque.icone]: '🟢' };
    })

    console.log(objetoEstoqueFinal);
    programaEstoque(objetoEstoque, objetoItensEstoque);
}

const menu = () => {
    return parseInt(prompt(`Digite a opção desejada:\n1 - Alterar Estoque\n2 - Visualizar Estoque\n3 - Sair`));
}

let objetoEstoque = [
    { item: 'torta', icone: '🍰', quantidade_padrao: 64, medida: 'pedaço' },
    { item: 'bolo', icone: '🎂', quantidade_padrao: 8, medida: 'unidade' },
    { item: 'cookie', icone: '🍪', quantidade_padrao: 100, medida: 'unidade' },
    { item: 'donut', icone: '🍩', quantidade_padrao: 20, medida: 'unidade' },
    { item: 'chocolate', icone: '🍫', quantidade_padrao: 50, medida: 'barra' },
];

let objetoItensEstoque = [
    { item: 'torta', quantidade: 64 },
    { item: 'bolo', quantidade: 8 },
    { item: 'cookie', quantidade: 100 },
    { item: 'donut', quantidade: 20 },
    { item: 'chocolate', quantidade: 50 },
];


const programaEstoque = (objetoEstoque, objetoItensEstoque) => {
    const menuPrograma = menu();

    switch (menuPrograma) {
        case 1:
            adicionaRetiraItem(objetoItensEstoque);
            break;
        case 2:
            exibeEstoque(objetoEstoque, objetoItensEstoque);
            break;
        case 3:
            alert('Obrigadx por usar nosso programa!');
            break;
        default:
            alert('Opção Inválida!');
            programaEstoque(objetoEstoque, objetoItensEstoque);
    }
}

programaEstoque(objetoEstoque, objetoItensEstoque);


//Exercício 03

let arrayAlunos = []

const cadastrarAluno = (arrayAlunos) => {
    const nome = prompt('Digite o nome do aluno: ');
    const email = prompt('Digite o email do aluno: ');
    const idade = prompt('Digite a idade do aluno: ');

    return [...arrayAlunos, {
        nome,
        email,
        idade,
        atividades: []
    }];
}

console.log(cadastrarAluno(arrayAlunos));

const menu = (arrayAlunos) => {
    const menuPrograma = parseInt(prompt(`Digite a opção desejada:\n1 - Cadastrar Aluno\n2 - Buscar Aluno\n3 - Excluir Aluno\n4 - Matricular Aluno\n5 - Sair`));

    switch (menuPrograma) {
        case 1:
            cadastrarAluno(arrayAlunos);
            break;
        case 2:
            buscarAluno(arrayAlunos);
            break;
        case 3:
            excluiAluno(arrayAlunos);
            break;
        case 4:
            matriculaAluno(arrayAlunos);
            break;
        case 5:
            alert('Obrigadx por usar nosso programa!');
            break;
        default:
            alert('Opção Inválida!');
            programaAcademia();
    }
}


//Exercício 04
const numeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const naipes = ['♣', '♦', '♥', '♠'];

const geraBaralho = (numeros, naipes) => {
    let cartasBaralho = numeros.map(carta => {
        return naipes.map(naipe => {
            return carta.toString() + naipe.toString();
        });
    }).join(',');

    return cartasBaralho.split(',').sort(() => Math.random() - 0.5);
};

//Exercício 05

const pesquisaArrayTrevos = () => {
    let array = [];

    for (let i = 0; i < 100000; i++) {
        if (Math.random() > 0.9999) {
            array = [...array, '🍀🍀🍀🍀'];
        } else {
            array = [...array, '🍀🍀🍀'];
        }
    }
    return array.findIndex(item => item === '🍀🍀🍀🍀');;
}


console.log(pesquisaArrayTrevos());

//Exercício 06

const geraArrayAleatorio = (qtde) => {
    let array = [];
    for (let i = 0; i < qtde; i++) {
        array = [...array, Math.floor(Math.random() * qtde * 50)];
    }

    return array;
}

const divisiveisPorTres = (array) => {
    let arrayDivisiveis = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            arrayDivisiveis = [...arrayDivisiveis, array[i]];
        }
    }

    return arrayDivisiveis;
}

//Exercício 07

const arrayOrdenado = () => {
    let arrayNumeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt('Digite um número'));
        arrayNumeros = [...arrayNumeros, numero]
    }

    return arrayNumeros.sort((a, b) => a > b ? 1 : -1);
}

//Exercício 08

const notasAlunos = [{
    nome: 'Jonas',
    notas: {
        historia: [9, 5, 6],
        matematica: [3, 7, 8],
        fisica: [10, 10, 6]
    }
},
{
    nome: 'Bia',
    notas: {
        historia: [6, 5, 6],
        matematica: [7, 7, 8],
        fisica: [8, 6, 9]
    }
},
{
    nome: 'Renata',
    notas: {
        historia: [8, 7, 9],
        matematica: [9, 7, 7],
        fisica: [5, 5, 8]
    }
}];

const calculaMedias = (notasAlunos) => {
    return notasAlunos.map((aluno) => {
        const medias = Object.entries(aluno.notas).map((materia) => {
            let media = 0;

            let nomeMateria = Object.values(materia[0]).join('');

            for (let valor of Object.values(materia[1])) {
                media += parseFloat(valor);
            }

            return {
                [nomeMateria]: media / parseInt(Object.keys(materia[1]).length),
            };
        });
        return {
            nome: aluno.nome,
            medias
        };
    });
}

console.log(calculaMedias(notasAlunos));


//Exercício 09
const carrinho = [
    {
        produto: 'Camisa branca:',
        quantidade: 4,
        valorDaUnidade: 25.50,
    },
    {
        produto: 'Calça jeans:',
        quantidade: 2,
        valorDaUnidade: 180.25,
    },
    {
        produto: 'Jaqueta',
        quantidade: 1,
        valorDaUnidade: 299.99,
    },
    {
        produto: 'Tênis de Corrida',
        quantidade: 1,
        valorDaUnidade: 150.50,
    },
    {
        produto: 'Par de meias',
        quantidade: 3,
        valorDaUnidade: 15.00,
    },
    {
        produto: 'Relógio esportivo',
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

    return `O valor da compra foi de R$ ${somaValor}`;
}

//Exercício 10
const restaurantes = [
    {
        nome: 'Pizzaria do Mario',
        horario_abertura: 14,
        horario_fechamento: 23
    },
    {
        nome: 'Churrascaria do Ronaldo',
        horario_abertura: 11,
        horario_fechamento: 14,
    },
    {
        nome: 'Bar do Zeca',
        horario_abertura: 12,
        horario_fechamento: 2,
    },
    {
        nome: 'Doceria da Mara',
        horario_abertura: 8,
        horario_fechamento: 20,
    },
]

const selecionaRestaurantes = (listaRestaurantes) => {
    const horaAtual = 1;
    return listaRestaurantes.filter(rest => {
        if (rest.horario_fechamento >= 0 && rest.horario_fechamento <= 6) {

            if (horaAtual >= 0 && horaAtual <= 6) {
                return horaAtual < rest.horario_fechamento;
            }

            return rest.horario_abertura <= horaAtual;

        }

        return rest.horario_abertura <= horaAtual && rest.horario_fechamento > horaAtual;

    });
}

//Exercício 11

//Gere chaves e pontuações aleatórias (de 0 a 3 vitórias) para 4 chaves esportivas de 4 países cada e em seguida filtre os 2 melhores times de cada chave que avançarão para a próxima fase.

const paises = ['Afghanistan', 'Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre Miquelon", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const opcoesDeVitorias = [
    [3, 2, 1, 0],
    [3, 1, 1, 1],
    [2, 2, 1, 1],
];

const geraArrayVitorias = (opcoesDeVitorias) => {

    const arrayRandomico = Math.floor(Math.random() * opcoesDeVitorias.length);

    return opcoesDeVitorias[arrayRandomico].sort(() => Math.random() - 0.5);

}

const geraListaPaises = (paises, chaves, participantes) => {
    let paisesEscolhidos = [];

    const numeroPaises = chaves * participantes;

    for (let i = 0; i < numeroPaises; i++) {
        let paisRandomico = Math.floor(Math.random() * paises.length);

        while (paisesEscolhidos.includes(paises[paisRandomico])) {
            paisRandomico = Math.floor(Math.random() * paises.length);
        }

        paisesEscolhidos = [...paisesEscolhidos, paises[paisRandomico]];
    }

    return paisesEscolhidos;
}

const geraChavesPaises = (paises, chaves, participantes, opcoesDeVitorias) => {
    let chaveFinal = [];
    let paisesEscolhidos = geraListaPaises(paises, chaves, participantes);

    while (paisesEscolhidos.length) {
        let chave = [];
        const arrayPaises = paisesEscolhidos.splice(0, 4);
        const arrayVitorias = geraArrayVitorias(opcoesDeVitorias);
        for (let i = 0; i < arrayPaises.length; i++) {
            chave = [...chave, { pais: arrayPaises[i], vitorias: arrayVitorias[i] }];
        }

        chave = chave.sort((a, b) => (a.vitorias < b.vitorias) ? 1 : -1);

        chaveFinal = [...chaveFinal, chave];
    }

    return chaveFinal;
}

const classificados = (paises, chaves, participantes, opcoesDeVitorias) => {
    const chavesPaises = geraChavesPaises(paises, chaves, participantes, opcoesDeVitorias);
    console.log(chavesPaises);
    let paisesClassificados = [];

    for (let chave of chavesPaises) {
        paisesClassificados = [...paisesClassificados, chave.filter((pais, index) => index < 2)];
    }

    return paisesClassificados;
}

//Exercício 12
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
]

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