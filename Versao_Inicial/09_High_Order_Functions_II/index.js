
//Exercício 01
const calculaMedia = (array) => {
    let media = 0;

    array.forEach(a => {
        media += a
    });

    return media / array.length;
}

const calculaMediana = (array) => {
    const arrayOrdenado = array.sort((n1, n2) => (n1 > n2) ? 1 : -1);

    return (arrayOrdenado.length % 2 === 1)
        ? arrayOrdenado[parseInt(arrayOrdenado.length / 2)]
        : calculaMedia([arrayOrdenado[(parseInt(arrayOrdenado.length / 2)) - 1], arrayOrdenado[parseInt(arrayOrdenado.length / 2)]]);
}

//Exercício 02
const iniciaisNomes = (nome) => {
    const nomeArray = nome.split(' ').map(n => { return n[0] });

    return nomeArray;
}


//Exercício 03
const menorQueDez = () => {
    const arrayOriginal = [12, 5, 8, 130, 44];
    let arrayMenorDez = arrayOriginal.filter(elemento => elemento < 10);

    return arrayMenorDez;
}

//Exercício 04
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


//Exercício 05
const ehPrimo = (numero) => {
    for (let i = 1; i <= numero; i++) {
        if ((i > 1 && i < numero) && numero % i == 0) {
            return;
        }

        if (i === numero) {
            return numero;
        }

    }
};

const arrayDePrimos = () => {
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return array.filter(numero => ehPrimo(numero));
}

//Exercício 06
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
]

const programaEmail = (usuarios) => {
    const email = prompt('Digite o email que você deseja procurar: ');

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);

    return usuarioEncontrado ? usuarioEncontrado : 'Usuário não encontrado';
}

//Exercício 07
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

    console.log(`O valor da compra foi de R$ ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(somaValor)}`);
}


//Exercício 08
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
]

const ddi = {
    'BR': 55,
    'CL': 56,
    'EG': 20,
    'FIN': 358,
    'FR': 33,
    'LUX': 352,
    'MX': 52,
}

const programaDdi = (telefones, ddi) => {

    const telefonesAtualizados = telefones.map(telefone => {
        return {
            pais: telefone.pais,
            numero: '+' + ddi[telefone.pais] + ' ' + telefone.numero,
        }
    });

    return telefonesAtualizados;
};


//Exercício 09
//Fatorial
const calculaFatorial = (numero) => {
    let arrayFatorial = [];
    let resultadoFatorial = 1;

    for (let i = 1; i <= numero; i++) {
        arrayFatorial = [...arrayFatorial, i];
    }

    arrayFatorial.map(n => {
        return resultadoFatorial *= n;
    });

    return resultadoFatorial;

}

//Exercício 10
const converteNumeronimo = (palavra) => {
    const palavraNumeronimo = (palavra.length >= 4) ? palavra.split('') : palavra;

    if (Array.isArray(palavraNumeronimo)) {
        return palavraNumeronimo[0] + (palavraNumeronimo.length - 2).toString() + palavraNumeronimo[[palavraNumeronimo.length - 1]];
    }

    return palavraNumeronimo
}

const numeronimos = (texto) => {

    return texto.split(' ').map(palavra => converteNumeronimo(palavra));

}