import { PlanoDomain } from "../../domain/PlanoDomain";
import { PlanoEntidade } from "../../infra/persistence/entity/PlanoEntidade";
export declare class PlanoEntityMapper {
    toEntidade(plano: PlanoDomain): PlanoEntidade;
    toDominio(plano: PlanoEntidade): PlanoDomain;
}
