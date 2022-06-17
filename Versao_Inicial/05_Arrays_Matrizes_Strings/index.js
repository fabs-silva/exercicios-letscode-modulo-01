//Exercício 01
const alunos = ["Jason", "Kimberly", "Zack", "Trini", "Billy", "Tommy"];
const notas = [
    [9.5, 7.0, 8.0, 7.5],
    [6.0, 7.0, 8.0, 9.0],
    [8.0, 7.0, 8.5, 7.5],
    [9.5, 10.0, 9.75, 9.0],
    [9.75, 9.5, 9.0, 9.5],
    [5.5, 4.5, 3.0, 7.0]
];

const calculaMedias = (alunos, notas) => {
    let listaMedias = [];
    let listaMediasCompleta = [];

    for (let nota of notas) {
        let media = 0;
        for (let i = 0; i < nota.length; i++) {
            media += parseFloat(nota[i]);
        }

        listaMedias = [...listaMedias, (media / nota.length).toFixed(2)];

    }

    for (let media of listaMedias) {
        listaMediasCompleta = [...listaMediasCompleta, { aluno: alunos[listaMedias.indexOf(media)], media }];
    }

    return listaMediasCompleta;

}

const calculaMediaTurma = (alunos, notas) => {
    const mediasAlunos = calculaMedias(alunos, notas).map(aluno => { return aluno.media });
    let mediaTurma = 0;

    for (let media of mediasAlunos) {
        mediaTurma += parseFloat(media);
    }

    mediaTurma = mediaTurma / mediasAlunos.length;

    return mediaTurma;
}

const maioresNotasAlunos = (alunos, notas) => {
    let maioresNotas = [];
    let maioresNotasCompleto = [];
    for (let notasAluno of notas) {
        const maiorNota = notasAluno.reduce((nota1, nota2) => (nota1 > nota2) ? nota1 : nota2);
        maioresNotas = [...maioresNotas, { nota: maiorNota, bimestre: notasAluno.indexOf(maiorNota) + 1 }];

    }

    for (let nota of maioresNotas) {
        maioresNotasCompleto = [...maioresNotasCompleto, { aluno: alunos[maioresNotas.indexOf(nota)], nota: nota.nota, bimestre: nota.bimestre }];
    }

    return maioresNotasCompleto;
}

const menoresNotasAlunos = (alunos, notas) => {
    let menoresNotas = [];
    let menoresNotasCompleto = [];
    for (let notasAluno of notas) {
        const menorNota = notasAluno.reduce((nota1, nota2) => (nota1 < nota2) ? nota1 : nota2);
        menoresNotas = [...menoresNotas, { nota: menorNota, bimestre: notasAluno.indexOf(menorNota) + 1 }];

    }

    for (let nota of menoresNotas) {
        menoresNotasCompleto = [...menoresNotasCompleto, { aluno: alunos[menoresNotas.indexOf(nota)], nota: nota.nota, bimestre: nota.bimestre }];
    }

    return menoresNotasCompleto;
}

const maiorNotaGeral = (alunos, notas) => {
    const maioresNotasObjeto = maioresNotasAlunos(alunos, notas);

    const maioresNotas = Math.max(...maioresNotasObjeto.map(nota => {
        return nota.nota;
    }));


    return maioresNotasObjeto.find(nota => nota.nota === maioresNotas);
}

const menorNotaGeral = (alunos, notas) => {
    const menoresNotasObjeto = menoresNotasAlunos(alunos, notas);

    const menoresNotas = Math.min(...menoresNotasObjeto.map(nota => {
        return nota.nota;
    }));


    return menoresNotasObjeto.find(nota => nota.nota === menoresNotas);
}

const programaAlunos = (alunos, notas) => {

    const objMaiorNotaGeral = maiorNotaGeral(alunos, notas);
    const objMenorNotaGeral = menorNotaGeral(alunos, notas);

    console.log('01 - Médias:');

    calculaMedias(alunos, notas).map(media => {
        console.log(`${media.aluno} obteve média ${media.media} no ano`);
    });

    console.log('02 - Média Geral:');

    console.log(`A média geral da turma foi de ${calculaMediaTurma(alunos, notas)}`);

    console.log('03 - Maiores Notas Por Aluno:');

    maioresNotasAlunos(alunos, notas).map(nota => {
        console.log(`${nota.aluno} obteve sua maior nota ${nota.nota} no ${nota.bimestre}º bimestre`);
    });

    console.log('04 - Menores Notas Por Aluno:');

    menoresNotasAlunos(alunos, notas).map(nota => {
        console.log(`${nota.aluno} obteve sua menor nota ${nota.nota} no ${nota.bimestre}º bimestre`);
    });

    console.log('05 - Maior Nota Geral:');

    console.log(`${objMaiorNotaGeral.aluno} obteve a maior nota da turma - ${objMaiorNotaGeral.nota} - no ${objMaiorNotaGeral.bimestre}º bimestre`)

    console.log('06 - Menor Nota Geral:');

    console.log(`${objMenorNotaGeral.aluno} obteve a menor nota da turma - ${objMenorNotaGeral.nota} - no ${objMenorNotaGeral.bimestre}º bimestre`);
}

//Exercício 02

const matriz = [
    [9.5, 7.0, 8.0, 7.5],
    [6.0, 7.0, 8.0, 9.0],
    [8.0, 7.0, 8.5, 7.5],
    [9.5, 10.0, 9.75, 9.0],
    [9.75, 9.5, 9.0, 9.5],
    [5.5, 4.5, 3.0, 7.0]
];

const sepLinha = "\n";
const sepColuna = ",";

const converteCSV = (matriz, sepLinha = '\n', sepColuna = ',') => {
    let matrizConvertida = [];

    for (let array of matriz) {
        let linhaConvertida = [];

        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                linhaConvertida = `${linhaConvertida}${array[i].toFixed(1)}`;
            } else {
                linhaConvertida = `${linhaConvertida}${array[i].toFixed(1)}${sepColuna}`;
            }

        }

        matrizConvertida = [...matrizConvertida, linhaConvertida]
    }

    return matrizConvertida.join(sepLinha);
}

//Exercício 03

const stringMatriz = "9.5,7.0,8.0,7.5 \n" +
    "6.0,7.0,8.0,9.0 \n" +
    "8.0,7.0,8.5,7.5 \n" +
    "9.5,10.0,9.75,9.0 \n" +
    "9.75,9.5,9.0,9.5 \n" +
    "5.5,4.5,3.0,7.0";

const sepLinha = "\n";
const sepColuna = ",";

const converteCSV = (stringMatriz, sepLinha, sepColuna) => {
    const separaLinhas = stringMatriz.split(sepLinha);
    let arrayLinhas = [];

    for (let linha of separaLinhas) {
        const linhaSeparada = linha.split(sepColuna);
        let linhaSeparadaFloat = [];

        for (let l of linhaSeparada) {
            linhaSeparadaFloat = [...linhaSeparadaFloat, parseFloat(l)];
        }

        arrayLinhas = [...arrayLinhas, linhaSeparadaFloat];
    }

    return arrayLinhas;
}

//Exercício 04

const texto = "eu programo em JavaScript mas nao programo em Python";

const histograma = (texto) => {
    const palavras = texto.split(' ');
    let objContagem = {};

    for (let palavra of palavras) {
        if (!objContagem[palavra]) {
            objContagem[palavra] = 1
        } else {
            objContagem[palavra] += 1
        }
    }

    return objContagem;
}

//Exercicio 05

const texto = "Eu tive 3 aulas, 2 projetos e 1 folga.";

const infoFrase = (texto) => {
    const caracteres = texto.split('');
    console.log(caracteres);
    let letras = [];
    let numeros = [];
    let outros = [];

    for (let caracter of caracteres) {
        const caracterCharCode = caracter.charCodeAt(0);

        if (caracterCharCode >= 48 && caracterCharCode <= 57) {
            numeros = [...numeros, caracter];
        } else if (caracterCharCode >= 65 && caracterCharCode <= 90) {
            letras = [...letras, caracter];
        } else if (caracterCharCode >= 97 && caracterCharCode <= 122) {
            letras = [...letras, caracter];
        } else {
            outros = [...outros, caracter];
        }
    }

    return {
        letras,
        numeros,
        outros
    };
}

console.log(infoFrase(texto));
