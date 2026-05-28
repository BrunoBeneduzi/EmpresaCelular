"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssinaturaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AssinaturaEntidade_1 = require("../entity/AssinaturaEntidade");
const ClienteModule_1 = require("../../../../cliente/infra/persistence/module/ClienteModule");
const PlanoModule_1 = require("../../../../plano/infra/persistence/module/PlanoModule");
const CadastraAssinatura_1 = require("../../../application/use_case/CadastraAssinatura");
const RetornaAssinatura_1 = require("../../../application/use_case/RetornaAssinatura");
const RepositorioPlano_1 = require("../../../../plano/adapters/gateways/RepositorioPlano");
const RepositorioCliente_1 = require("../../../../cliente/adapters/gateways/RepositorioCliente");
const AssinaturaEntityMapper_1 = require("../../../adapters/mappers/AssinaturaEntityMapper");
const RepositorioAssinaturaReq_1 = require("../repository/RepositorioAssinaturaReq");
const RepositorioAssinatura_1 = require("../../../adapters/gateways/RepositorioAssinatura");
const AssinaturaController_1 = require("../../../adapters/controller/AssinaturaController");
const EditaAssinatura_1 = require("../../../application/use_case/EditaAssinatura");
let AssinaturaModule = class AssinaturaModule {
};
exports.AssinaturaModule = AssinaturaModule;
exports.AssinaturaModule = AssinaturaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([AssinaturaEntidade_1.AssinaturaEntidade]), ClienteModule_1.ClienteModule, PlanoModule_1.PlanoModule],
        controllers: [AssinaturaController_1.AssinaturaController],
        providers: [
            AssinaturaEntityMapper_1.AssinaturaEntityMapper,
            RepositorioAssinaturaReq_1.RepositorioAssinaturaReq,
            {
                provide: RepositorioAssinatura_1.RepositorioAssinatura,
                useFactory: (repositorioReq, mapper) => {
                    return new RepositorioAssinatura_1.RepositorioAssinatura(repositorioReq, mapper);
                },
                inject: [RepositorioAssinaturaReq_1.RepositorioAssinaturaReq, AssinaturaEntityMapper_1.AssinaturaEntityMapper]
            },
            {
                provide: 'ICADASTRA_ASSINATURA',
                useFactory: (repoAss, repoClin, repoPlan) => {
                    return new CadastraAssinatura_1.CadastraAssinatura(repoAss, repoClin, repoPlan);
                },
                inject: [RepositorioAssinatura_1.RepositorioAssinatura, RepositorioCliente_1.RepositorioCliente, RepositorioPlano_1.RepositorioPlano]
            },
            {
                provide: 'IRETORNA_ASSINATURA',
                useFactory: (repo) => {
                    return new RetornaAssinatura_1.RetornaAssinatura(repo);
                },
                inject: [RepositorioAssinatura_1.RepositorioAssinatura]
            },
            {
                provide: 'IEDITA_ASSINATURA',
                useFactory: (repo) => {
                    return new EditaAssinatura_1.EditaAssinatura(repo);
                },
                inject: [RepositorioAssinatura_1.RepositorioAssinatura]
            }
        ],
        exports: ['ICADASTRA_ASSINATURA', 'IRETORNA_ASSINATURA', 'IEDITA_ASSINATURA']
    })
], AssinaturaModule);
//# sourceMappingURL=AssinaturaModule.js.map