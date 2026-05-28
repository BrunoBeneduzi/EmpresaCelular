import { IRepositorioPlanos } from "../../application/ports/output/IRepositorioPlano";
import { RepositorioPlanosReq } from "../../infra/persistence/repository/RepositorioPlanosReq";
import { CacheEntityDomainMapper } from "../mapper/CacheEntityDomainMapper";
import { CachePlanosDomain } from "../../Domain/CachePlanosDomain";
export declare class RepositorioPlanos implements IRepositorioPlanos {
    private repo;
    private mapper;
    constructor(repo: RepositorioPlanosReq, mapper: CacheEntityDomainMapper);
    deletaPlano(id: number): void;
    listaPlanoStatus(id: number): Promise<CachePlanosDomain | null>;
    cadastraStatusPlano(codAssinatura: number, status: boolean): Promise<CachePlanosDomain>;
    atualizaStatusPlano(codAssinatura: number, status: boolean): void;
}
