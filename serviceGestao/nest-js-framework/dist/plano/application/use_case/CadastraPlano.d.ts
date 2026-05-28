import { PlanoDomain } from "../../domain/PlanoDomain";
import { ICadastraPlano } from "../ports/input/ICadastraPlano";
import { IRepositorioPlanos } from "../ports/output/IRepositorioPlano";
export declare class cadastraPlano implements ICadastraPlano {
    private cadastra;
    constructor(cadastra: IRepositorioPlanos);
    cadastraPlano(plano: PlanoDomain): void;
}
