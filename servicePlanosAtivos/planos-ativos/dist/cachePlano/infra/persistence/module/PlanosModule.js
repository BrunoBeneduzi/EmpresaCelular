"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const CachePlanosEntity_1 = require("../entity/CachePlanosEntity");
const CacheEntityDomainMapper_1 = require("../../../adapters/mapper/CacheEntityDomainMapper");
const RepositorioPlanosReq_1 = require("../repository/RepositorioPlanosReq");
const RepositorioPlanos_1 = require("../../../adapters/gateways/RepositorioPlanos");
const ListaPlanos_1 = require("../../../application/use_case/ListaPlanos");
const ControllerPlanos_1 = require("../../../adapters/controller/ControllerPlanos");
const microservices_1 = require("@nestjs/microservices");
const DeletaCachePlano_1 = require("../../../application/use_case/DeletaCachePlano");
let PlanosModule = class PlanosModule {
};
exports.PlanosModule = PlanosModule;
exports.PlanosModule = PlanosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([CachePlanosEntity_1.CachePlanoEntidade]),
            microservices_1.ClientsModule.register([{
                    name: 'PLANOS_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://admin:admin@localhost:5672'],
                        queue: 'fila_broker',
                        queueOptions: { durable: true }
                    }
                }]),
        ],
        controllers: [ControllerPlanos_1.ControllerPlanos],
        providers: [
            CacheEntityDomainMapper_1.CacheEntityDomainMapper,
            RepositorioPlanosReq_1.RepositorioPlanosReq,
            {
                provide: RepositorioPlanos_1.RepositorioPlanos,
                useFactory: (repositorioReq, mapper) => {
                    return new RepositorioPlanos_1.RepositorioPlanos(repositorioReq, mapper);
                },
                inject: [RepositorioPlanosReq_1.RepositorioPlanosReq, CacheEntityDomainMapper_1.CacheEntityDomainMapper]
            },
            {
                provide: 'ILISTA_PLANO',
                useFactory: (repo, broker) => {
                    return new ListaPlanos_1.ListaPlanos(repo, broker);
                },
                inject: [RepositorioPlanos_1.RepositorioPlanos, 'PLANOS_SERVICE']
            },
            {
                provide: 'IDELETA_PLANO',
                useFactory: (repo) => {
                    return new DeletaCachePlano_1.DeletaCachePlano(repo);
                },
                inject: [RepositorioPlanos_1.RepositorioPlanos]
            },
        ],
        exports: ['ILISTA_PLANO', 'IDELETA_PLANO']
    })
], PlanosModule);
//# sourceMappingURL=PlanosModule.js.map