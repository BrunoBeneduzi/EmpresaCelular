"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const PagamentoDto_1 = require("./mapper/PagamentoDto");
const rxjs_1 = require("rxjs");
let AppController = class AppController {
    plano;
    planoAtivo;
    constructor(plano, planoAtivo) {
        this.plano = plano;
        this.planoAtivo = planoAtivo;
    }
    async recebeReqPlano(id) {
        const resposta = await (0, rxjs_1.lastValueFrom)(this.plano.send('plano_gestao', id));
        return resposta;
    }
    recebeReqPagamento(pagamento) {
        this.plano.emit('pagamento_feito', pagamento);
        this.planoAtivo.emit('apagar_assinatura', pagamento.codigoAssinatura);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)('plano_status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "recebeReqPlano", null);
__decorate([
    (0, microservices_1.EventPattern)('pagamento_ativo'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PagamentoDto_1.PagamentoDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "recebeReqPagamento", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('ASSINATURA_SERVICE')),
    __param(1, (0, common_1.Inject)('PLANO_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy, microservices_1.ClientProxy])
], AppController);
//# sourceMappingURL=AppController.js.map