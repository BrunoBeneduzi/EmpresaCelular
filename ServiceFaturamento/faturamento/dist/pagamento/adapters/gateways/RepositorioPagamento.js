"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPagamento = void 0;
class RepositorioPagamento {
    repoPag;
    mapper;
    constructor(repoPag, mapper) {
        this.repoPag = repoPag;
        this.mapper = mapper;
    }
    async realizaPagamento(pagamento) {
        const entidade = this.mapper.toDomainEntidade(pagamento);
        const entidade2 = await this.repoPag.realizaPagamento(entidade);
        return this.mapper.toEntidadeDomain(entidade2);
    }
}
exports.RepositorioPagamento = RepositorioPagamento;
//# sourceMappingURL=RepositorioPagamento.js.map