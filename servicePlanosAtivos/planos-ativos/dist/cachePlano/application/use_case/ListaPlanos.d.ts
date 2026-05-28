import { CachePlanosDomain } from "../../Domain/CachePlanosDomain";
import { IListaPlanos } from "../ports/input/IListaPlanos";
import type { IRepositorioPlanos } from "../ports/output/IRepositorioPlano";
import { ClientProxy } from "@nestjs/microservices";
export declare class ListaPlanos implements IListaPlanos {
    private repo;
    private broker;
    constructor(repo: IRepositorioPlanos, broker: ClientProxy);
    listaPlanoAtivo(id: number): Promise<CachePlanosDomain>;
}
