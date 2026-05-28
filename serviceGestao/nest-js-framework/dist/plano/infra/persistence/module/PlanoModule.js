"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PlanoEntidade_1 = require("../entity/PlanoEntidade");
const CadastraPlano_1 = require("../../../application/use_case/CadastraPlano");
const RepositorioPlanoReq_1 = require("../repository/RepositorioPlanoReq");
const EditaPlano_1 = require("../../../application/use_case/EditaPlano");
const ListaPlano_1 = require("../../../application/use_case/ListaPlano");
const PlanoEntityMapper_1 = require("../../../adapters/mappers/PlanoEntityMapper");
const RepositorioPlano_1 = require("../../../adapters/gateways/RepositorioPlano");
let PlanoModule = class PlanoModule {
};
exports.PlanoModule = PlanoModule;
exports.PlanoModule = PlanoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlanoEntidade_1.PlanoEntidade])],
        providers: [
            PlanoEntityMapper_1.PlanoEntityMapper,
            RepositorioPlanoReq_1.RepositorioPlanosReq,
            {
                provide: RepositorioPlano_1.RepositorioPlano,
                useFactory: (repositorioReq, mapper) => {
                    return new RepositorioPlano_1.RepositorioPlano(repositorioReq, mapper);
                },
                inject: [RepositorioPlanoReq_1.RepositorioPlanosReq, PlanoEntityMapper_1.PlanoEntityMapper]
            },
            {
                provide: CadastraPlano_1.cadastraPlano,
                useFactory: (repo) => {
                    return new CadastraPlano_1.cadastraPlano(repo);
                },
                inject: [RepositorioPlano_1.RepositorioPlano]
            },
            {
                provide: 'ILISTA_PLANO',
                useFactory: (repo) => {
                    return new ListaPlano_1.ListaPlano(repo);
                },
                inject: [RepositorioPlano_1.RepositorioPlano]
            },
            {
                provide: 'IEDITA_PLANO',
                useFactory: (repo) => {
                    return new EditaPlano_1.EditaPlano(repo);
                },
                inject: [RepositorioPlano_1.RepositorioPlano]
            }
        ],
        exports: [CadastraPlano_1.cadastraPlano, 'ILISTA_PLANO', 'IEDITA_PLANO', RepositorioPlano_1.RepositorioPlano]
    })
], PlanoModule);
//# sourceMappingURL=PlanoModule.js.map