"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditaAssinatura = void 0;
class EditaAssinatura {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    atualizaDataPagamento(id, dataPagamento) {
        this.repo.atualizaDataPagamento(id, dataPagamento);
    }
}
exports.EditaAssinatura = EditaAssinatura;
//# sourceMappingURL=EditaAssinatura.js.map