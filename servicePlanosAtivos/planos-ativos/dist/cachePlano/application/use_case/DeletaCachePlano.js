"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletaCachePlano = void 0;
class DeletaCachePlano {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    deletaPlano(id) {
        this.repo.deletaPlano(id);
    }
}
exports.DeletaCachePlano = DeletaCachePlano;
//# sourceMappingURL=DeletaCachePlano.js.map