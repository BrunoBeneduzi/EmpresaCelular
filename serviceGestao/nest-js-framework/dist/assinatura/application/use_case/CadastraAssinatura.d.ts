import { IRepositorioCliente } from "../../../cliente/application/ports/output/IRepositorioCliente";
import { IRepositorioPlanos } from "../../../plano/application/ports/output/IRepositorioPlano";
import { AssinaturaDomain } from "../../domain/AssinaturaDomain";
import { ICadastraAssinatura } from "../ports/input/ICadastraAssinatura";
import { IRepositorioAssinatura } from "../ports/output/IRepositorioAssinatura";
export declare class CadastraAssinatura implements ICadastraAssinatura {
    private repositorioAss;
    private repositorioClin;
    private repositorioPlan;
    constructor(repositorioAss: IRepositorioAssinatura, repositorioClin: IRepositorioCliente, repositorioPlan: IRepositorioPlanos);
    cadastraAssinatura(assinatura: AssinaturaDomain): Promise<AssinaturaDomain>;
}
