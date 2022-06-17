//Exercício 01
const calculaBonus = (salario, tempo) => {
    if (tempo < 1.0) {
        console.log('Não existe valor de bônus anual.');
    }

    if (tempo >= 1.0 && tempo <= 4.0) {
        console.log(`O valor do bônus anual será de R$ ${(salario * 0.05).toFixed(2)}.`);
    }

    if (tempo > 4.0 && tempo <= 7.0) {
        console.log(`O valor do bônus anual será de R$ ${(salario * 0.10).toFixed(2)}.`);
    }

    if (tempo > 7.0) {
        console.log(`O valor do bônus anual será de R$ ${(salario * 0.15).toFixed(2)}.`);
    }

}

//Exercício 02
const calculaResgate = (capital, taxa, meses) => {
    let valorResgatado = capital;

    for (let i = 1; i <= meses; i++) {
        valorResgatado += valorResgatado * (taxa / 100);
    }

    return valorResgatado.toFixed(2);

}

//Exercício 03
const classificaTriangulo = (lado1, lado2, lado3) => {

    if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
        return 'Inválido'
    };

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado1) {
        return 'Equilátero'
    };

    if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {
        return 'Escaleno'
    };

    if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
        return 'Isósceles'
    };

}

//Exercício 04
const calculosComRaio = () => {
    let opcao = menu();
    switch (opcao) {
        case 1:
            return comprimentoCircunferencia();
        case 2:
            return areaCirculo();
        case 3:
            return areaSuperficie();
        case 4:
            return volumeEsfera();
        case 5:
            alert('Obrigadx por utilizar nosso programa! Até a próxima!')
            break;
        default: alert('Opção inválida!');
            calculosComRaio();
    }

}

const menu = () => {
    let opcao = parseInt(prompt('Selecione a opção desejada:\n\n' +
        '1 - Calcular o comprimento da circunferência\n' +
        '2 - Calcular a área do círculo\n' +
        '3 - Calcular a área da superfície da esfera\n' +
        '4 - Calcular o volume da esfera\n' +
        '5 - Sair'));

    return opcao;

}

const comprimentoCircunferencia = () => {
    const raio = parseFloat(prompt('Digite a medida do raio: '));
    alert(`O valor aproximado do comprimento da circunferencia é ${(2 * 3.14 * raio).toFixed(2)}`);
    calculosComRaio();
}

const areaCirculo = () => {
    const raio = parseFloat(prompt('Digite a medida do raio: '));
    alert(`O valor aproximado da área do círculo é ${(3.14 * Math.pow(raio, 2)).toFixed(2)}`);
    calculosComRaio();
}

const areaSuperficie = () => {
    const raio = parseFloat(prompt('Digite a medida do raio: '));
    alert(`O valor aproximado da área da superfície da esfera é ${(4 * 3.14 * Math.pow(raio, 2)).toFixed(2)}`);
    calculosComRaio();
}

const volumeEsfera = () => {
    const raio = parseFloat(prompt('Digite a medida do raio: '));
    alert(`O valor aproximado do volume da esfera é ${((4 / 3) * 3.14 * Math.pow(raio, 3)).toFixed(2)}`);
    calculosComRaio();
}

//Exercício 05
const sorteio = () => {
    let resultado = 0;

    for (let i = 1; i <= 10; i++) {
        resultado += Math.random() * 100;
    }

    return (resultado / 10).toFixed(2);

}

//Exercício 06 - Arrow Function
const dobro = (numero) => {
    return numero * 2;
}

//Exercício 06 - Regular Function
function dobro(numero) {
    return numero * 2;
}

//Exercício 07 - Arrow Function e If
const ehPar = (numero) => {
    if (numero % 2 === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}

//Exercício 07 - Regular Function e If
function ehPar(numero) {
    if (numero % 2 === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}

//Exercício 07 - Arrow Function e Ternário
const ehPar = (numero) => {
    return (numero % 2 === 0) ? 'É par' : 'É impar';
}

//Exercício 07 - Regular Function e Ternário
function ehPar(numero) {
    return (numero % 2 === 0) ? 'É par' : 'É impar';
}

//Exercício 08
const fibonacci = (numero) => {
    let arrayFibonacci = [1];

    if (numero === 1) {
        return arrayFibonacci;
    }

    for (let i = 0; i <= numero - 2; i++) {
        if (i === 0) {
            arrayFibonacci.push(1);
        } else {
            arrayFibonacci.push(arrayFibonacci[i] + arrayFibonacci[i - 1]);
        }
    }

    return arrayFibonacci;

}

//Exercício 09
const fibonacci = (numero) => {
    if (numero === 0) {
        return null;
    }

    if (numero < 2) {
        return numero;
    }

    return fibonacci(numero - 1) + fibonacci(numero - 2);

}

const seqFibonacci = (numero) => {
    let arrayFibonacci = [];
    for (let i = 1; i <= numero; i++) {
        arrayFibonacci.push(fibonacci(i));
    }
    return arrayFibonacci;
}

//Exercício 10
const fatorial = (numero) => {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1)
    }
}

//Exercício 11
const potencia = (base, expoente) => {
    if (expoente === 0) {
        return 1;
    }

    if (expoente === 1) {
        return base;
    }

    return (base * potencia(base, expoente - 1));

}
