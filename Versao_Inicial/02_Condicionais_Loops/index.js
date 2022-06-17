//Exercício 01
const numero = parseInt(prompt('Digite um número: '));

numero < 0 ? console.log('O número digitado é negativo.') : console.log('O número digitado é positivo.');

//Exercício 02
const numero = parseInt(prompt('Digite um número: '));

numero % 2 === 1 ? console.log('O número digitado é ímpar.') : console.log('O número digitado é par.');

//Exercício 03
const altura = parseFloat(prompt('Qual sua altura? '));
const idade = parseInt(prompt('Qual sua idade? '));

/* Sugerido na solução da Let's Code */
let peloMenosUm = false;

console.log(`Você tem ${idade} anos e mede ${altura} metro(s) de altura. Portanto:`);

if (idade >= 3 && altura >= 1.0) {
    console.log('- Você pode usar o carrossel.');
    peloMenosUm = true;
}

if ((idade >= 4 && idade <= 9) && altura <= 1.3) {
    console.log('- Você pode usar a piscina de bolinhas.');
    peloMenosUm = true;
}

if (altura >= 1.1) {
    console.log('- Você pode usar a montanha russa.');
    peloMenosUm = true;
}

/* Sugerido na solução da Let's Code */
if (!peloMenosUm) {
    console.log('- Você não pode usar nenhum brinquedo.');
}

//Exercício 04
const idade = parseInt(prompt('Qual sua idade? '));

if (isNaN(idade)) {
    console.log('Idade inválida');
}

if (idade < 14) {
    console.log('Menor de idade');
}

if (idade >= 14 && idade <= 15) {
    console.log('Pode trabalhar como aprendiz');
}

if (idade >= 16 && idade <= 17) {
    console.log('Pode votar');
}

if (idade >= 18) {
    console.log('Maior de idade');
}

//Exercício 05
let idade = parseInt(prompt('Qual sua idade?'));

while (isNaN(idade)) {
    idade = parseInt(prompt('Idade inválida! Qual sua idade?'));
}

if (idade < 14) {
    console.log('Menor de idade');
}

if (idade >= 14 && idade <= 15) {
    console.log('Pode trabalhar como aprendiz');
}

if (idade >= 16 && idade <= 17) {
    console.log('Pode votar');
}

if (idade >= 18) {
    console.log('Maior de idade');
}

//Exercício 06
const numero = parseInt(prompt('Digite um número: '));
const fatorial = 1;

if (numero === 0) {
    fatorial = 1;
}

for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

console.log(`O valor do fatorial para o número ${numero} é ${fatorial}`);

//Exercício 07
const numero = parseInt(prompt('Digite um número: '));

for (let i = 1; i <= numero; i++) {
    if ((i > 1 && i < numero) && numero % i == 0) {
        console.log('O número não é primo');
        break;
    }

    if (i == numero) {
        console.log('O número é primo');
    }
}

//Exercício 08
const qtdeProvas = parseInt(prompt('Qual a quantidade de provas realizadas?'));
let somaNotasProva = 0;

for (let i = 0; i < qtdeProvas; i++) {
    const notaProva = parseFloat(prompt(`digite a nota da prova ${i + 1}:`));
    somaNotasProva += notaProva;
}

console.log(`a média das notas é ${(somaNotasProva / qtdeProvas).toFixed(2)}.`);

//Exercício 09
let notaProva = parseFloat(prompt('Digite a nota da primeira prova: '));
let somaNotasProva = 0;
let qtdeProvas = 0;

while (notaProva >= 0) {
    somaNotasProva += notaProva;
    qtdeProvas++;
    notaProva = parseFloat(prompt('Digite a nota da próxima prova: '));
}

console.log(`A média das notas é ${(somaNotasProva / qtdeProvas).toFixed(2)}.`);


