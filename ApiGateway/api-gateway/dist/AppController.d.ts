import { ClientProxy } from "@nestjs/microservices";
import { PagamentoDto } from "./mapper/PagamentoDto";
export declare class AppController {
    private plano;
    private planoAtivo;
    constructor(plano: ClientProxy, planoAtivo: ClientProxy);
    recebeReqPlano(id: number): Promise<any>;
    recebeReqPagamento(pagamento: PagamentoDto): void;
}
