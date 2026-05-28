import { AssinaturaDomain } from "../../domain/AssinaturaDomain";
import { AssinaturaEntidade } from "../../infra/persistence/entity/AssinaturaEntidade";
export declare class AssinaturaEntityMapper {
    toEntidade(assinatura: AssinaturaDomain): AssinaturaEntidade;
    toDominio(assinatura: AssinaturaEntidade): AssinaturaDomain;
}
