"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssinaturaEntityMapper = void 0;
const AssinaturaDomain_1 = require("../../domain/AssinaturaDomain");
const AssinaturaEntidade_1 = require("../../infra/persistence/entity/AssinaturaEntidade");
class AssinaturaEntityMapper {
    toEntidade(assinatura) {
        return new AssinaturaEntidade_1.AssinaturaEntidade(assinatura.getCodigoPlano, assinatura.getCodigoCliente, assinatura.getCustoFinal, assinatura.getDescricao);
    }
    toDominio(assinatura) {
        return new AssinaturaDomain_1.AssinaturaDomain(assinatura.getCodigoPlano, assinatura.getCodigoCliente, assinatura.getCustoFinal, assinatura.getDescricao);
    }
}
exports.AssinaturaEntityMapper = AssinaturaEntityMapper;
//# sourceMappingURL=AssinaturaEntityMapper.js.map