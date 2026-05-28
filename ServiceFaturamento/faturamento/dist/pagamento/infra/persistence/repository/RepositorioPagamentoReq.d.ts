import { PagamentoEntidade } from "../entity/PagamentoEntidade";
import { Repository } from "typeorm";
export declare class RepositorioPagamentoReq {
    private repositorio;
    constructor(repositorio: Repository<PagamentoEntidade>);
    realizaPagamento(pagamento: PagamentoEntidade): Promise<PagamentoEntidade>;
}
