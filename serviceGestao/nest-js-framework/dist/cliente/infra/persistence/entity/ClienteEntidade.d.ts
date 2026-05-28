export declare class ClienteEntidade {
    codigo: number;
    nome: string;
    email: string;
    constructor(nome: string, email: string);
    get getNome(): string;
    get getEmail(): string;
    get getCodigo(): number;
}
