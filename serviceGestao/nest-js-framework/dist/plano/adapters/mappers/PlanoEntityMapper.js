"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoEntityMapper = void 0;
const PlanoDomain_1 = require("../../domain/PlanoDomain");
const PlanoEntidade_1 = require("../../infra/persistence/entity/PlanoEntidade");
class PlanoEntityMapper {
    toEntidade(plano) {
        return new PlanoEntidade_1.PlanoEntidade(plano.getNome, plano.getCustoMensal, plano.getDescricao);
    }
    toDominio(plano) {
        return new PlanoDomain_1.PlanoDomain(plano.getNome, plano.getCustoMensal, plano.getDescricao);
    }
}
exports.PlanoEntityMapper = PlanoEntityMapper;
//# sourceMappingURL=PlanoEntityMapper.js.map