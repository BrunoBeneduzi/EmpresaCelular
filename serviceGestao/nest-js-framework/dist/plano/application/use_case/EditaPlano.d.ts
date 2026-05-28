import { PlanoDomain } from "../../domain/PlanoDomain";
import { IEditaPlano } from "../ports/input/IEditaPlano";
import { IRepositorioPlanos } from "../ports/output/IRepositorioPlano";
export declare class EditaPlano implements IEditaPlano {
    private editaPlano;
    constructor(editaPlano: IRepositorioPlanos);
    editaNomePlano(plano: PlanoDomain): void;
    editaCustoMensalPlano(id: number, custoMensal: number): Promise<PlanoDomain>;
    editaDataModificacaoPlano(plano: PlanoDomain): void;
    editaDescricaoPlano(plano: PlanoDomain): void;
}
