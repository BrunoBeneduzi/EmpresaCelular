import { PlanoEntidade } from "../entity/PlanoEntidade";
import { Repository } from "typeorm";
export declare class RepositorioPlanosReq {
    private planoRepositorio;
    constructor(planoRepositorio: Repository<PlanoEntidade>);
    cadastrarPlano(plano: PlanoEntidade): void;
    listarPlanos(): Promise<PlanoEntidade[]>;
    listarPlano(id: number): Promise<PlanoEntidade | null>;
    editaCustoMensalPlano(id: number, custoMensal: number): Promise<import("typeorm").UpdateResult>;
}
