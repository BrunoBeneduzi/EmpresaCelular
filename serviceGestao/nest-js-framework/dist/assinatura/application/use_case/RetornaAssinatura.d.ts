import { AssinaturaDomain } from "../../domain/AssinaturaDomain";
import { IRetornaAssinatura } from "../ports/input/IRetornaAssinatura";
import { IRepositorioAssinatura } from "../ports/output/IRepositorioAssinatura";
export declare class RetornaAssinatura implements IRetornaAssinatura {
    private repositorioAss;
    constructor(repositorioAss: IRepositorioAssinatura);
    retornaAssinatura(id: number): Promise<AssinaturaDomain>;
    retornaAssinaturaPlano(idPlano: number): Promise<AssinaturaDomain[]>;
    retornaAssinaturaPorCliente(idCliente: number): Promise<AssinaturaDomain[]>;
    retornaAssinaturaPorTipo(tipo: string): Promise<AssinaturaDomain[]>;
    formataDataEseparaAtivoCancelado(assinatura: AssinaturaDomain[]): AssinaturaDomain[];
    formataDataEseparaAtivoCanceladoUnico(assinatura: AssinaturaDomain): AssinaturaDomain;
    verificaAtivoOuCancelado(ass: AssinaturaDomain, dataDeHoje: Date): AssinaturaDomain;
    hoje(): Date;
    toBrasilia(data: Date): Date;
    formataData(data: Date): string;
}
