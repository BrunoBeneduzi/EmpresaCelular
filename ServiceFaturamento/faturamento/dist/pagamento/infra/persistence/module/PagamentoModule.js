"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PagamentoEntidade_1 = require("../entity/PagamentoEntidade");
const CadastraPagamento_1 = require("../../../application/use_case/CadastraPagamento");
const PagamentoEntityMapper_1 = require("../../../adapters/mappers/PagamentoEntityMapper");
const RepositorioPagamentoReq_1 = require("../repository/RepositorioPagamentoReq");
const RepositorioPagamento_1 = require("../../../adapters/gateways/RepositorioPagamento");
const microservices_1 = require("@nestjs/microservices");
const PagamentoController_1 = require("../../../adapters/controller/PagamentoController");
let PagamentoModule = class PagamentoModule {
};
exports.PagamentoModule = PagamentoModule;
exports.PagamentoModule = PagamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([PagamentoEntidade_1.PagamentoEntidade]),
            microservices_1.ClientsModule.register([{
                    name: 'FATURAMENTO_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://admin:admin@localhost:5672'],
                        queue: 'fila_broker',
                        queueOptions: { durable: true }
                    }
                }])
        ],
        controllers: [PagamentoController_1.PagamentoController],
        providers: [
            PagamentoEntityMapper_1.PagamentoEntityMapper,
            RepositorioPagamentoReq_1.RepositorioPagamentoReq,
            {
                provide: RepositorioPagamento_1.RepositorioPagamento,
                useFactory: (repositorioReq, mapper) => {
                    return new RepositorioPagamento_1.RepositorioPagamento(repositorioReq, mapper);
                },
                inject: [RepositorioPagamentoReq_1.RepositorioPagamentoReq, PagamentoEntityMapper_1.PagamentoEntityMapper],
            },
            {
                provide: 'ICADASTRA_PAGAMENTO',
                useFactory: (repoPag, broker) => {
                    return new CadastraPagamento_1.CadastraPagamento(repoPag, broker);
                },
                inject: [RepositorioPagamento_1.RepositorioPagamento, 'FATURAMENTO_SERVICE']
            },
        ],
        exports: ['ICADASTRA_PAGAMENTO']
    })
], PagamentoModule);
//# sourceMappingURL=PagamentoModule.js.map