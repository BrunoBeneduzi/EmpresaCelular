import { PagamentoDomain } from "../../domain/PagamentoDomain";
import { PagamentoEntidade } from "../../infra/persistence/entity/PagamentoEntidade";
import { CadastraPagamentoDto } from "./CadastraPagamentoDto";
export declare class PagamentoEntityMapper {
    toDomainEntidade(pagamento: PagamentoDomain): PagamentoEntidade;
    toEntidadeDomain(pagamento: PagamentoEntidade): PagamentoDomain;
    toDomainDto(pagamento: PagamentoDomain): CadastraPagamentoDto;
    toDtoDomain(pagamento: CadastraPagamentoDto): PagamentoDomain;
}
