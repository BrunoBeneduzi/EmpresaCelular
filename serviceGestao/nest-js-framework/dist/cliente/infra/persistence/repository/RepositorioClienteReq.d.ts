import { ClienteEntidade } from "../entity/ClienteEntidade";
import { Repository } from "typeorm";
export declare class RepositorioClienteReq {
    private clienteRepositorio;
    constructor(clienteRepositorio: Repository<ClienteEntidade>);
    cadastraCliente(cliente: ClienteEntidade): Promise<ClienteEntidade>;
    listarClientes(): Promise<ClienteEntidade[]>;
    listarCliente(id: number): Promise<ClienteEntidade | null>;
    verificaSeClinteExiste(emaiil: string): Promise<ClienteEntidade | null>;
}
