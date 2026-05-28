import { PlanoDomain } from "../../domain/PlanoDomain";
import { IListaPlano } from "../ports/input/IListaPlano";
import { IRepositorioPlanos } from "../ports/output/IRepositorioPlano";
export declare class ListaPlano implements IListaPlano {
    private repositorio;
    constructor(repositorio: IRepositorioPlanos);
    listaPlano(id: number): Promise<PlanoDomain>;
    listarPlanos(): Promise<PlanoDomain[]>;
}
