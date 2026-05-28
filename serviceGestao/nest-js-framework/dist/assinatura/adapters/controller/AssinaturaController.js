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
exports.AssinaturaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AssinaturaController = class AssinaturaController {
    edita;
    retorna;
    constructor(edita, retorna) {
        this.edita = edita;
        this.retorna = retorna;
    }
    async devolveStatusAssinatura(idAss) {
        const plano = await this.retorna.retornaAssinatura(idAss);
        if (plano.getStatus == "ATIVO") {
            return { codAss: plano.getCodigo, status: true };
        }
        else {
            return { codAss: plano.getCodigo, status: false };
        }
    }
    pagamentoAtivo(data) {
        const { codigoAssinatura, dataPagamento } = data;
        this.edita.atualizaDataPagamento(codigoAssinatura, dataPagamento);
    }
};
exports.AssinaturaController = AssinaturaController;
__decorate([
    (0, microservices_1.MessagePattern)('plano_gestao'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "devolveStatusAssinatura", null);
__decorate([
    (0, microservices_1.EventPattern)('pagamento_feito'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AssinaturaController.prototype, "pagamentoAtivo", null);
exports.AssinaturaController = AssinaturaController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('IEDITA_ASSINATURA')),
    __param(1, (0, common_1.Inject)('IRETORNA_ASSINATURA')),
    __metadata("design:paramtypes", [Object, Object])
], AssinaturaController);
//# sourceMappingURL=AssinaturaController.js.map