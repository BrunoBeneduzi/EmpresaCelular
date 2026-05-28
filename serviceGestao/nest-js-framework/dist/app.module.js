"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ClienteModule_1 = require("./cliente/infra/persistence/module/ClienteModule");
const PlanoModule_1 = require("./plano/infra/persistence/module/PlanoModule");
const AssinaturaModule_1 = require("./assinatura/infra/persistence/module/AssinaturaModule");
const ServiceGestao_1 = require("./controllerGeral/ServiceGestao");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'postgres',
                password: 'adm',
                database: 'loja',
                autoLoadEntities: true,
                synchronize: true,
            }),
            ClienteModule_1.ClienteModule,
            PlanoModule_1.PlanoModule,
            AssinaturaModule_1.AssinaturaModule
        ],
        controllers: [ServiceGestao_1.ServicoGestao]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map