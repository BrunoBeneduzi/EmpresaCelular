import { IRepositorioAssinatura } from "../../application/ports/output/IRepositorioAssinatura";
import { AssinaturaDomain } from "../../domain/AssinaturaDomain";
import { RepositorioAssinaturaReq } from "../../infra/persistence/repository/RepositorioAssinaturaReq";
import { AssinaturaEntityMapper } from "../mappers/AssinaturaEntityMapper";
export declare class RepositorioAssinatura implements IRepositorioAssinatura {
    private repositorio;
    private mapper;
    constructor(repositorio: RepositorioAssinaturaReq, mapper: AssinaturaEntityMapper);
    listaAssinatura(id: number): Promise<AssinaturaDomain>;
    atualizaDataPagamento(id: number, dataUltimoPagamento: Date): void;
    listaAssinaturaPorPlano(id: number): Promise<AssinaturaDomain[]>;
    listaAssinaturasDeCliente(id: number): Promise<AssinaturaDomain[]>;
    listaAssinaturas(): Promise<AssinaturaDomain[]>;
    cadastrarAssinatura(assinatura: AssinaturaDomain): Promise<AssinaturaDomain>;
}
