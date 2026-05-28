"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaPlano = void 0;
class ListaPlano {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    listaPlano(id) {
        return this.repositorio.listarPlano(id);
    }
    async listarPlanos() {
        return await this.repositorio.listarPlanos();
    }
}
exports.ListaPlano = ListaPlano;
//# sourceMappingURL=ListaPlano.js.map