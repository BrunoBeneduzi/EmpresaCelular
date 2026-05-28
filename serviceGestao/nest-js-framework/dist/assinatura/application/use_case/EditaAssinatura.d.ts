import { RepositorioAssinatura } from "../../adapters/gateways/RepositorioAssinatura";
import { IEditaAssinatura } from "../ports/input/IEditaAssinatura";
export declare class EditaAssinatura implements IEditaAssinatura {
    private repo;
    constructor(repo: RepositorioAssinatura);
    atualizaDataPagamento(id: number, dataPagamento: Date): void;
}
