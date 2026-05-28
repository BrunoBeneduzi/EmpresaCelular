export declare class CachePlanoEntidade {
    private codigo;
    codigoAss: number;
    private status;
    constructor(status: boolean);
    setCodigoAss(codigoAss: number): void;
    get getCodigo(): number;
    get getStatus(): boolean;
}
