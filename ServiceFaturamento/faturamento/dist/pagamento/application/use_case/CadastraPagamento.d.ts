import { PagamentoDomain } from "../../domain/PagamentoDomain";
import { ICadastraPagamento } from "../ports/input/ICadastraPagamento";
import type { IRepositorioPagamento } from "../ports/output/IRepositorioPagamento";
import { ClientProxy } from "@nestjs/microservices";
export declare class CadastraPagamento implements ICadastraPagamento {
    private repositorioPag;
    private broker;
    constructor(repositorioPag: IRepositorioPagamento, broker: ClientProxy);
    realizaPagamento(pagamento: PagamentoDomain): Promise<PagamentoDomain>;
}
