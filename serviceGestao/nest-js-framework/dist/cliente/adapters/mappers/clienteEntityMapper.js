"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEntityMapper = void 0;
const ClienteDomain_1 = require("../../domain/ClienteDomain");
const ClienteEntidade_1 = require("../../infra/persistence/entity/ClienteEntidade");
class ClienteEntityMapper {
    toEntidade(cliente) {
        return new ClienteEntidade_1.ClienteEntidade(cliente.getNome, cliente.getEmail);
    }
    toDominio(cliente) {
        return new ClienteDomain_1.ClienteDomain(cliente.getNome, cliente.getEmail);
    }
}
exports.ClienteEntityMapper = ClienteEntityMapper;
//# sourceMappingURL=clienteEntityMapper.js.map