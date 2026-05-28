import type { IListaPlanos } from "../../application/ports/input/IListaPlanos";
import type { IDeletaPlano } from "../../application/ports/input/IDeletaPlano";
export declare class ControllerPlanos {
    private deleta;
    private lista;
    constructor(deleta: IDeletaPlano, lista: IListaPlanos);
    retornaPlanosAtivos(id: number): Promise<boolean>;
    apagarCacheAssinatura(id: number): void;
}
