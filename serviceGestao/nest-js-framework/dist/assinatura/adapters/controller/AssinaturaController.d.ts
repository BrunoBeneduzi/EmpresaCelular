import type { IEditaAssinatura } from "../../application/ports/input/IEditaAssinatura";
import type { IRetornaAssinatura } from "../../application/ports/input/IRetornaAssinatura";
export declare class AssinaturaController {
    private edita;
    private retorna;
    constructor(edita: IEditaAssinatura, retorna: IRetornaAssinatura);
    devolveStatusAssinatura(idAss: number): Promise<{
        codAss: number | undefined;
        status: boolean;
    }>;
    pagamentoAtivo(data: any): void;
}
