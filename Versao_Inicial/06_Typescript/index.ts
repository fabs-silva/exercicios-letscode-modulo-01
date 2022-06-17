//Exercício 01
interface Colaborador {
    id: number,
    nome: string,
    endereço: string,
    salario: number,
    area: string,
    cargo: string,
    dataContração: Date,
    dataDemissão?: Date
}

//Exercício 02
interface DatasEmpresa {
    dataEmpresa: Date | string | undefined;
};

interface Colaborador {
    id: number,
    nome: string,
    endereço: string,
    salario: number,
    area: string,
    cargo: string,
    dataContração: DatasEmpresa,
    dataDemissão?: DatasEmpresa
}