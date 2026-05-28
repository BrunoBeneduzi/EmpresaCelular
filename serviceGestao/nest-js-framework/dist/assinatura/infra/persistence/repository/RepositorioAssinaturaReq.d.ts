import { AssinaturaEntidade } from "../entity/AssinaturaEntidade";
import { Repository } from "typeorm";
export declare class RepositorioAssinaturaReq {
    private assinaturaRepositorio;
    constructor(assinaturaRepositorio: Repository<AssinaturaEntidade>);
    listaAssinatura(id: number): Promise<AssinaturaEntidade | null>;
    atualizaDataPagamento(id: number, dataUltimoPagamento: Date): Promise<void>;
    cadastraAssinatura(assinatura: AssinaturaEntidade): Promise<AssinaturaEntidade>;
    listarAssinaturas(): Promise<AssinaturaEntidade[]>;
    listarAssinaturasDoCliente(id: number): Promise<AssinaturaEntidade[]>;
    listarPlanosPorAssinatura(id: number): Promise<AssinaturaEntidade[]>;
}
