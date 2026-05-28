export declare class PagamentoDomain {
    private codigo?;
    private codigoAssinatura;
    private valorPago;
    private dataPagamento;
    constructor(codigoAssinatura: number, valorPago: number, dataPagamento: Date);
    get getCodigo(): number | undefined;
    get getCodigoAssinatura(): number;
    get getValorPago(): number;
    get getDataPagamento(): Date;
}
