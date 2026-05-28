import { ClienteDomain } from "../../domain/ClienteDomain";
import { ClienteEntidade } from "../../infra/persistence/entity/ClienteEntidade";
export declare class ClienteEntityMapper {
    toEntidade(cliente: ClienteDomain): ClienteEntidade;
    toDominio(cliente: ClienteEntidade): ClienteDomain;
}
