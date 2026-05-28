import { IDeletaPlano } from "../ports/input/IDeletaPlano";
export declare class DeletaCachePlano implements IDeletaPlano {
    private repo;
    constructor(repo: IDeletaPlano);
    deletaPlano(id: number): void;
}
