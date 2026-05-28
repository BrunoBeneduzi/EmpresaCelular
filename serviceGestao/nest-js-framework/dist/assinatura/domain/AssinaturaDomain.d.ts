export declare class AssinaturaDomain {
    private codigo?;
    private codigoPlano;
    private codigoCliente;
    private inicioFidelidade;
    private fimFidelidade;
    private dataUltimoPagamento;
    private custoFinal;
    private descricao;
    private status?;
    constructor(codigoPlano: number, codigoCliente: number, custoFinal: number, descricao: string);
    set setStatus(status: string);
    set setCodigo(codigo: number);
    set setInicioFidelidade(inicioFidelidade: Date);
    set setFimFidelidade(fimFidelidade: Date);
    set setDataUltimoPagamento(dataUltimoPagamento: Date | null);
    get getCodigo(): number | undefined;
    get getCodigoCliente(): number;
    get getCodigoPlano(): number;
    get getInicioFidelidade(): Date;
    get getFimFidelidade(): Date;
    get getDataUltimoPagamento(): Date | null;
    get getCustoFinal(): number;
    get getDescricao(): string;
    get getStatus(): string | undefined;
}
