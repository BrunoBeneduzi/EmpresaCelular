"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarCliente = void 0;
class EditarCliente {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    editaNomeCliente(cliente) {
        this.repositorio.editaNomeCliente(cliente);
    }
    editaEmailCliente(cliente) {
        this.repositorio.editaEmailCliente(cliente);
    }
}
exports.EditarCliente = EditarCliente;
//# sourceMappingURL=EditarCliente.js.map