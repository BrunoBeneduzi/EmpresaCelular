import { ClienteDomain } from "../../domain/ClienteDomain";
import { IListaCliente } from "../ports/input/IListaCliente";
import { IRepositorioCliente } from "../ports/output/IRepositorioCliente";
export declare class ListarCliente implements IListaCliente {
    private repositorio;
    constructor(repositorio: IRepositorioCliente);
    listarUmCliente(id: number): Promise<ClienteDomain>;
    listarTodosOsClientes(): Promise<ClienteDomain[]>;
}
