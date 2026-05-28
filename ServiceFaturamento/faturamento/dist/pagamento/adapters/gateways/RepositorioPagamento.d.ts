import { IRepositorioPagamento } from "../../application/ports/output/IRepositorioPagamento";
import { PagamentoDomain } from "../../domain/PagamentoDomain";
import { RepositorioPagamentoReq } from "../../infra/persistence/repository/RepositorioPagamentoReq";
import { PagamentoEntityMapper } from "../mappers/PagamentoEntityMapper";
export declare class RepositorioPagamento implements IRepositorioPagamento {
    private repoPag;
    private mapper;
    constructor(repoPag: RepositorioPagamentoReq, mapper: PagamentoEntityMapper);
    realizaPagamento(pagamento: PagamentoDomain): Promise<PagamentoDomain>;
}
