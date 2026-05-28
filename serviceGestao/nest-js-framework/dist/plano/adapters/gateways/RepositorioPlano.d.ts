import { IRepositorioPlanos } from "../../application/ports/output/IRepositorioPlano";
import { PlanoDomain } from "../../domain/PlanoDomain";
import { RepositorioPlanosReq } from "../../infra/persistence/repository/RepositorioPlanoReq";
import { PlanoEntityMapper } from "../mappers/PlanoEntityMapper";
export declare class RepositorioPlano implements IRepositorioPlanos {
    private repositorio;
    private mapper;
    constructor(repositorio: RepositorioPlanosReq, mapper: PlanoEntityMapper);
    cadastraPlano(plano: PlanoDomain): void;
    listarPlanos(): Promise<PlanoDomain[]>;
    listarPlano(id: number): Promise<PlanoDomain>;
    editaNomePlano(plano: PlanoDomain): PlanoDomain;
    editaCustoMensalPlano(id: number, custoMensal: number): Promise<PlanoDomain>;
    editaDataModificacaoPlano(plano: PlanoDomain): PlanoDomain;
    editaDescricaoPlano(plano: PlanoDomain): PlanoDomain;
}
