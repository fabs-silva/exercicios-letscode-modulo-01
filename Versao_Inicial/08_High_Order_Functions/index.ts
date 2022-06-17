import { Produto } from './types';

//Exercício 01
const geraArrayCategorias = (objetos: Produto[]) => {
    let listaCategorias = [] as string[];
    for (let obj of objetos) {
        listaCategorias = [...listaCategorias, obj.categoria];
    }
    return listaCategorias;
}

const contagemCategorias = (objetos: Produto[]) => {
    const listaCategorias = geraArrayCategorias(objetos);
    let objContagem = {} as { [categoria: string]: number };

    for (let categoria of listaCategorias) {
        if (!objContagem[categoria]) {
            objContagem[categoria] = 1
        } else {
            objContagem[categoria] += 1
        }
    }

    return objContagem;
}

//Exercício 02
const objetosCategoria = (objetos: Produto[], categoria: string) => {
    return objetos.filter(obj => obj.categoria === categoria);
}

//Exercício 03
const produtoMaisBarato = (objetos: Produto[], categoria: string) => {
    const objetosDaCategoria = objetosCategoria(objetos, categoria);
    return objetosDaCategoria.reduce((obj1, obj2) => (obj1.preco > obj2.preco) ? obj1 : obj2);
}

const produtoMaisCaro = (objetos: Produto[], categoria: string) => {
    const objetosDaCategoria = objetosCategoria(objetos, categoria);
    return objetosDaCategoria.reduce((obj1, obj2) => (obj1.preco < obj2.preco) ? obj1 : obj2);
}

//Exercicio 04
const nProdutosMaisBaratos = (objetos: Produto[], numero: number) => {
    const produtosOrdenados = objetos.sort((obj1, obj2) => (parseFloat(obj1.preco) > parseFloat(obj2.preco)) ? 1 : -1);
    return produtosOrdenados.slice(0, numero);
}

const nProdutosMaisCaros = (objetos: Produto[], numero: number) => {
    const produtosOrdenados = objetos.sort((obj1, obj2) => (parseFloat(obj1.preco) < parseFloat(obj2.preco)) ? 1 : -1);
    return produtosOrdenados.slice(0, numero);
}

//Exercício 05
const produtosFaixaValor = (objetos: Produto[], valorMax: number, valorMin: number) => {
    const produtosFiltrados = objetos.filter(obj => parseFloat(obj.preco) < valorMin && parseFloat(obj.preco) > valorMax);

    return produtosFiltrados.sort((obj1, obj2) => (parseFloat(obj1.preco) > parseFloat(obj2.preco)) ? 1 : -1);
}

const produtosCategoriaFaixaValor = (objetos: Produto[], valorMax: number, valorMin: number, categoria: string) => {
    const produtosFiltrados = objetosCategoria(objetos, categoria).filter(obj => parseFloat(obj.preco) < valorMin && parseFloat(obj.preco) > valorMax);

    return produtosFiltrados.sort((obj1, obj2) => (parseFloat(obj1.preco) > parseFloat(obj2.preco)) ? 1 : -1);
}