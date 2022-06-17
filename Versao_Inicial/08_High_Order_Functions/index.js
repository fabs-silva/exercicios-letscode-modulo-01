import { base_de_dados } from './bd_exercicios';

//Exercício 06

const menu = () => {
    let opcao = parseInt(prompt('Selecione a opção desejada:\n\n' +
        '1 - Listar Todas as Categorias\n' +
        '2 - Listar Todos os Produtos de uma Categoria\n' +
        '3 - Listar o Produto Mais Barato de uma Categoria\n' +
        '4 - Listar o Produto Mais Caro de uma Categoria\n' +
        '5 - Listar uma Quantidade de Produtos Mais Baratos \n' +
        '6 - Listar uma Quantidade de Produtos Mais Caros\n' +
        '7 - Listar Todos os Produtos em uma Faixa de Valor\n' +
        '8 - Listar Todos os Produtos de uma Categoria em uma Faixa de Valor\n' +
        '9 - Sair'));

    return opcao;

}

const listarProdutosCompleto = (objetos) => {
    let opcao = menu();
    switch (opcao) {
        case 1:
            alert(JSON.stringify(contagemCategorias(objetos)));
            listarProdutosCompleto(objetos);
        case 2:
            const categoria2 = prompt('Qual categoria você gostaria de pesquisar?');
            alert(JSON.stringify(objetosCategoria(objetos, categoria2)));
            listarProdutosCompleto(objetos);
        case 3:
            const categoria3 = prompt('Qual categoria você gostaria de pesquisar?');
            alert(JSON.stringify(produtoMaisBarato(objetos, categoria3)));
            listarProdutosCompleto(objetos);
        case 4:
            const categoria4 = prompt('Qual categoria você gostaria de pesquisar?');
            alert(JSON.stringify(produtoMaisCaro(objetos, categoria4)));
            listarProdutosCompleto(objetos);
        case 5:
            const numeroProdutos5 = parseInt(prompt('Quantos produtos você deseja pesquisar?'));
            alert(JSON.stringify(nProdutosMaisBaratos(objetos, numeroProdutos5)));
            listarProdutosCompleto(objetos);
        case 6:
            const numeroProdutos6 = prompt('Quantos produtos você deseja pesquisar?');
            alert(JSON.stringify(nProdutosMaisCaros(objetos, numeroProdutos6)));
            listarProdutosCompleto(objetos);
        case 7:
            const valorMax7 = parseFloat(prompt('Qual o valor máximo dos produtos?'));
            const valorMin7 = parseFloat(prompt('Qual o valor mínimo dos produtos?'));
            alert(JSON.stringify(produtosFaixaValor(objetos, valorMax7, valorMin7)));
            listarProdutosCompleto(objetos);
        case 8:
            const categoria8 = prompt('Qual categoria você gostaria de pesquisar?').toString();
            const valorMax8 = parseFloat(prompt('Qual o valor máximo dos produtos dessa categoria?'));
            const valorMin8 = parseFloat(prompt('Qual o valor mínimo dos produtos dessa categoria?'));
            alert(JSON.stringify(produtosCategoriaFaixaValor(objetos, valorMax8, valorMin8, categoria8)));
            listarProdutosCompleto(objetos);
        case 9:
            alert('Obrigadx por utilizar nosso programa! Até a próxima!');
            break;
        default: alert('Opção inválida!');
            listarProdutosCompleto(objetos);
    }

}

listarProdutosCompleto(base_de_dados)