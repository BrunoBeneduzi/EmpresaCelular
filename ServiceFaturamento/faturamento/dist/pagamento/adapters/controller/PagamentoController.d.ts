import { CadastraPagamentoDto } from "../mappers/CadastraPagamentoDto";
import type { ICadastraPagamento } from "../../application/ports/input/ICadastraPagamento";
import { PagamentoEntityMapper } from "../mappers/PagamentoEntityMapper";
export declare class PagamentoController {
    private cadastro;
    private mapper;
    constructor(cadastro: ICadastraPagamento, mapper: PagamentoEntityMapper);
    cadastraPagamento(dto: CadastraPagamentoDto): Promise<CadastraPagamentoDto>;
}
