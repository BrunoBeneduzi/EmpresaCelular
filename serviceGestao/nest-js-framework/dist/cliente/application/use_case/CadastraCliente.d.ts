import { ClienteDomain } from "../../domain/ClienteDomain";
import { ICadastraCliente } from "../ports/input/ICadastraCliente";
import { IRepositorioCliente } from "../ports/output/IRepositorioCliente";
export declare class CadastraCliente implements ICadastraCliente {
    private repositorio;
    constructor(repositorio: IRepositorioCliente);
    cadastraNovoCliente(nome: string, emaiil: string): Promise<ClienteDomain>;
}
