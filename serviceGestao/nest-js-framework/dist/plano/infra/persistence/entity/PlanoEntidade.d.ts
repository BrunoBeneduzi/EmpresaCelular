export declare class PlanoEntidade {
    codigo: number;
    nome: string;
    custoMensal: number;
    private data;
    private descricao;
    constructor(nome: string, custoMensal: number, descricao: string);
    get getCodigo(): number;
    get getNome(): string;
    get getCustoMensal(): number;
    get getData(): Date;
    get getDescricao(): string;
}
