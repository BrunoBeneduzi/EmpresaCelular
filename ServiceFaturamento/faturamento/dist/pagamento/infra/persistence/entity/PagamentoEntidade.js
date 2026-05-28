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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoEntidade = void 0;
const typeorm_1 = require("typeorm");
let PagamentoEntidade = class PagamentoEntidade {
    codigo;
    codigoAssinatura;
    valorPago;
    dataPagamento;
    constructor(codigoAssinatura, valorPago, dataPagamento) {
        this.codigoAssinatura = codigoAssinatura;
        this.valorPago = valorPago;
        this.dataPagamento = dataPagamento;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getCodigoAssinatura() {
        return this.codigoAssinatura;
    }
    get getValorPago() {
        return this.valorPago;
    }
    get getDataPagamento() {
        return this.dataPagamento;
    }
};
exports.PagamentoEntidade = PagamentoEntidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PagamentoEntidade.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "codigo_assinatura" }),
    __metadata("design:type", Number)
], PagamentoEntidade.prototype, "codigoAssinatura", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PagamentoEntidade.prototype, "valorPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], PagamentoEntidade.prototype, "dataPagamento", void 0);
exports.PagamentoEntidade = PagamentoEntidade = __decorate([
    (0, typeorm_1.Entity)({ name: 'pagamentos' }),
    __metadata("design:paramtypes", [Number, Number, Date])
], PagamentoEntidade);
//# sourceMappingURL=PagamentoEntidade.js.map