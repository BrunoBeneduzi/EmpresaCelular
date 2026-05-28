"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ClienteEntidade_1 = require("../entity/ClienteEntidade");
const RepositorioClienteReq_1 = require("../repository/RepositorioClienteReq");
const CadastraCliente_1 = require("../../../application/use_case/CadastraCliente");
const ListarCliente_1 = require("../../../application/use_case/ListarCliente");
const EditarCliente_1 = require("../../../application/use_case/EditarCliente");
const clienteEntityMapper_1 = require("../../../adapters/mappers/clienteEntityMapper");
const RepositorioCliente_1 = require("../../../adapters/gateways/RepositorioCliente");
let ClienteModule = class ClienteModule {
};
exports.ClienteModule = ClienteModule;
exports.ClienteModule = ClienteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ClienteEntidade_1.ClienteEntidade])],
        providers: [
            clienteEntityMapper_1.ClienteEntityMapper,
            RepositorioClienteReq_1.RepositorioClienteReq,
            {
                provide: RepositorioCliente_1.RepositorioCliente,
                useFactory: (repositorioReq, mapper) => {
                    return new RepositorioCliente_1.RepositorioCliente(repositorioReq, mapper);
                },
                inject: [RepositorioClienteReq_1.RepositorioClienteReq, clienteEntityMapper_1.ClienteEntityMapper]
            },
            {
                provide: 'ICADASTRA_CLIENTE',
                useFactory: (repo) => {
                    return new CadastraCliente_1.CadastraCliente(repo);
                },
                inject: [RepositorioCliente_1.RepositorioCliente]
            },
            {
                provide: 'ILISTA_CLIENTE',
                useFactory: (repo) => {
                    return new ListarCliente_1.ListarCliente(repo);
                },
                inject: [RepositorioCliente_1.RepositorioCliente]
            },
            {
                provide: 'IEDITA_CLIENTE',
                useFactory: (repo) => {
                    return new EditarCliente_1.EditarCliente(repo);
                },
                inject: [RepositorioCliente_1.RepositorioCliente]
            },
        ],
        exports: ['ICADASTRA_CLIENTE', 'ILISTA_CLIENTE', 'IEDITA_CLIENTE', RepositorioCliente_1.RepositorioCliente]
    })
], ClienteModule);
//# sourceMappingURL=ClienteModule.js.map