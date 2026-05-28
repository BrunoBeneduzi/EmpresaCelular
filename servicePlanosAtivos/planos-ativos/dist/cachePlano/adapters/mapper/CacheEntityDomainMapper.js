"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheEntityDomainMapper = void 0;
const CachePlanosDomain_1 = require("../../Domain/CachePlanosDomain");
const CachePlanosEntity_1 = require("../../infra/persistence/entity/CachePlanosEntity");
class CacheEntityDomainMapper {
    toDomainEntidade(domain) {
        return new CachePlanosEntity_1.CachePlanoEntidade(domain.getStatus);
    }
    toEntidadeDomain(entity) {
        return new CachePlanosDomain_1.CachePlanosDomain(entity.codigoAss, entity.getStatus);
    }
}
exports.CacheEntityDomainMapper = CacheEntityDomainMapper;
//# sourceMappingURL=CacheEntityDomainMapper.js.map