"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDomain = void 0;
class ClienteDomain {
    codigo;
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    get getNome() {
        return this.nome;
    }
    get getEmail() {
        return this.email;
    }
    get getCodigo() {
        return this.codigo;
    }
}
exports.ClienteDomain = ClienteDomain;
//# sourceMappingURL=ClienteDomain.js.map