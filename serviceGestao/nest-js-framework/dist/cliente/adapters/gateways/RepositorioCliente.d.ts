import { IRepositorioCliente } from "../../application/ports/output/IRepositorioCliente";
import { ClienteDomain } from "../../domain/ClienteDomain";
import { RepositorioClienteReq } from "../../infra/persistence/repository/RepositorioClienteReq";
import { ClienteEntityMapper } from "../mappers/clienteEntityMapper";
export declare class RepositorioCliente implements IRepositorioCliente {
    private mapper;
    private repositorio;
    constructor(repositorio: RepositorioClienteReq, mapper: ClienteEntityMapper);
    cadastraCliente(nome: string, emaiil: string): Promise<ClienteDomain>;
    listarClientes(): Promise<ClienteDomain[]>;
    listarCliente(id: number): Promise<ClienteDomain>;
    editaEmailCliente(cliente: ClienteDomain): ClienteDomain;
    editaNomeCliente(cliente: ClienteDomain): ClienteDomain;
}
