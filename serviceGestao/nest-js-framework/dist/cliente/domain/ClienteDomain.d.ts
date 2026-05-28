export declare class ClienteDomain {
    private codigo?;
    private nome;
    private email;
    constructor(nome: string, email: string);
    get getNome(): string;
    get getEmail(): string;
    get getCodigo(): number | undefined;
}
