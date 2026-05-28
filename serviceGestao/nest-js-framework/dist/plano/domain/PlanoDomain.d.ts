export declare class PlanoDomain {
    private codigo?;
    private nome;
    private custoMensal;
    private data?;
    private descricao;
    constructor(nome: string, custoMensal: number, descricao: string);
    set setData(data: Date);
    get getCodigo(): number | undefined;
    get getNome(): string;
    get getCustoMensal(): number;
    get getData(): Date | undefined;
    get getDescricao(): string;
}
