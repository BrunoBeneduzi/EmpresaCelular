import { CachePlanosDomain } from "../../Domain/CachePlanosDomain";
import { CachePlanoEntidade } from "../../infra/persistence/entity/CachePlanosEntity";
export declare class CacheEntityDomainMapper {
    toDomainEntidade(domain: CachePlanosDomain): CachePlanoEntidade;
    toEntidadeDomain(entity: CachePlanoEntidade): CachePlanosDomain;
}
