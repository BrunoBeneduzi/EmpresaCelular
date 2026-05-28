export declare class AssinaturaEntidade {
    codigo: number;
    codigoPlano: number;
    codigoCliente: number;
    private inicioFidelidade;
    private fimFidelidade;
    dataUltimoPagamento: Date | null;
    private custoFinal;
    private descricao;
    constructor(codigoPlano: number, codigoCliente: number, custoFinal: number, descricao: string);
    get getCodigo(): number;
    get getCodigoCliente(): number;
    get getCodigoPlano(): number;
    get getInicioFidelidade(): Date;
    get getFimFidelidade(): Date;
    get getDataUltimoPagamento(): Date | null;
    get getCustoFinal(): number;
    get getDescricao(): string;
}
