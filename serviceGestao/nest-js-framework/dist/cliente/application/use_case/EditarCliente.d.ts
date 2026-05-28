import { ClienteDomain } from "../../domain/ClienteDomain";
import { IEditaCliente } from "../ports/input/IEditaCliente";
import { IRepositorioCliente } from "../ports/output/IRepositorioCliente";
export declare class EditarCliente implements IEditaCliente {
    private repositorio;
    constructor(repositorio: IRepositorioCliente);
    editaNomeCliente(cliente: ClienteDomain): void;
    editaEmailCliente(cliente: ClienteDomain): void;
}
