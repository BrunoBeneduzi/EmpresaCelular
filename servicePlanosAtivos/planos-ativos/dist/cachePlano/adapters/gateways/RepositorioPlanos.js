"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPlanos = void 0;
class RepositorioPlanos {
    repo;
    mapper;
    constructor(repo, mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }
    deletaPlano(id) {
        this.repo.deletaPlano(id);
    }
    async listaPlanoStatus(id) {
        const domain2 = await this.repo.retornaPlanoStatus(id);
        if (domain2 == null) {
            return null;
        }
        return this.mapper.toEntidadeDomain(domain2);
    }
    async cadastraStatusPlano(codAssinatura, status) {
        const domain = await this.repo.cadastraPlaoStatus(codAssinatura, status);
        return this.mapper.toEntidadeDomain(domain);
    }
    atualizaStatusPlano(codAssinatura, status) {
        this.repo.atualizaPlanoStatus(codAssinatura, status);
    }
}
exports.RepositorioPlanos = RepositorioPlanos;
//# sourceMappingURL=RepositorioPlanos.js.map