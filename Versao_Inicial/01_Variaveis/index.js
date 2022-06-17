//Exercicio 03
console.log(nome);

var nome = "apareci aqui, pois sofro hoisting";

/* Resultado: O resultado no console é undefined */

//Exercício 04
const inteiro = prompt('Digite um número inteiro: ');

console.log(`O dobro de ${inteiro} é ${inteiro * 2}`);

//Exercício 05 - Resolução proposta
const nota1 = parseFloat(prompt("digite a nota do primeiro bimestre: "));
const nota2 = parseFloat(prompt("digite a nota do segundo bimestre: "));
const nota3 = parseFloat(prompt("digite a nota do terceiro bimestre: "));
const nota4 = parseFloat(prompt("digite a nota do quarto bimestre: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4.0;

console.log("A média das notas é " + media);

//Exercício 05 - Resolução com loop
const media = 0;

for (let i = 0; i < 4; i++) {
    const novaNota = parseFloat(prompt(`Digite a nota do bimestre ${i + 1}: `));
    media += novaNota;
}

console.log(`A média das notas é ${media / 4}`);

//Exercício 06
const raio = parseFloat(prompt('Digite o raio do círculo: '));
const area = 3.14 * raio * raio;

console.log(`A área do círculo é: ${area}.`);

//Exercício 07 - F para °C
const fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));
const celsius = 5 * (farhenheit - 32) / 9;

console.log(`A temperatura em Celsius é ${celsius.toFixed(2)}`);

//Exercício 07 - °C para F 
const celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}`);

//Exercício 08
const valorProduto = parseFloat(prompt('Digite o valor do produto: '));
const desconto = parseFloat(prompt('Digite o percentual de desconto: '));

const novoPreco = valorProduto * (1 - (desconto / 100));

console.log(`O valor a ser pago pelo produto será de R$ ${novoPreco.toFixed(2)}.`);

//Exercício 09
const salario = parseFloat(prompt('Digite o valor atual do salário: '));
const percentual = parseFloat(prompt('Digite o percentual de aumento: '));

const novoSalario = salario * (1 + (percentual / 100));

console.log(`O novo salário será de R$ ${novoSalario.toFixed(2)}, com aumento de R$ ${(novoSalario - salario).toFixed(2)}.`);

//Exercício 10
const numero = parseInt(prompt('Digite um número: '));
const ehPar = numero % 2 === 1 ? false : true;

console.log(`O número digitado é par: ${ehPar}`);