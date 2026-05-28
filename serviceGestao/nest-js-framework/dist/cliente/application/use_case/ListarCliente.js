"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarCliente = void 0;
class ListarCliente {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    listarUmCliente(id) {
        return this.repositorio.listarCliente(id);
    }
    listarTodosOsClientes() {
        return this.repositorio.listarClientes();
    }
}
exports.ListarCliente = ListarCliente;
//# sourceMappingURL=ListarCliente.js.map