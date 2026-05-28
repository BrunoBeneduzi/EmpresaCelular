"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastraCliente = void 0;
class CadastraCliente {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    cadastraNovoCliente(nome, emaiil) {
        return this.repositorio.cadastraCliente(nome, emaiil);
    }
}
exports.CadastraCliente = CadastraCliente;
//# sourceMappingURL=CadastraCliente.js.map