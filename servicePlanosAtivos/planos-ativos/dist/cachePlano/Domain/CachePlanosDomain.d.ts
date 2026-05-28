export declare class CachePlanosDomain {
    private codigo;
    private status;
    private codAss;
    constructor(codAss: number, status: boolean);
    get getCodigo(): number;
    get getStatus(): boolean;
}
