import { Repository } from "typeorm";
import { CachePlanoEntidade } from "../entity/CachePlanosEntity";
export declare class RepositorioPlanosReq {
    private planoRepositorio;
    constructor(planoRepositorio: Repository<CachePlanoEntidade>);
    deletaPlano(id: number): void;
    retornaPlanoStatus(id: number): Promise<CachePlanoEntidade | null>;
    cadastraPlaoStatus(idAssinatura: number, status: boolean): Promise<CachePlanoEntidade>;
    atualizaPlanoStatus(idAssinatura: number, status: boolean): void;
}
