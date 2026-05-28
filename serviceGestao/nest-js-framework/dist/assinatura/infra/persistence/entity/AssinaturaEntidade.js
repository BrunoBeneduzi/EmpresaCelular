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
exports.AssinaturaEntidade = void 0;
const typeorm_1 = require("typeorm");
let AssinaturaEntidade = class AssinaturaEntidade {
    codigo;
    codigoPlano;
    codigoCliente;
    inicioFidelidade;
    fimFidelidade;
    dataUltimoPagamento;
    custoFinal;
    descricao;
    constructor(codigoPlano, codigoCliente, custoFinal, descricao) {
        const dataHoje = new Date();
        const dataFutura = new Date(dataHoje);
        dataFutura.setFullYear(dataHoje.getFullYear() + 1);
        this.dataUltimoPagamento = null;
        this.codigoCliente = codigoCliente;
        this.codigoPlano = codigoPlano;
        this.inicioFidelidade = dataHoje;
        this.fimFidelidade = dataFutura;
        this.custoFinal = custoFinal;
        this.descricao = descricao;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getCodigoCliente() {
        return this.codigoCliente;
    }
    get getCodigoPlano() {
        return this.codigoPlano;
    }
    get getInicioFidelidade() {
        return new Date(this.inicioFidelidade);
    }
    get getFimFidelidade() {
        return new Date(this.fimFidelidade);
    }
    get getDataUltimoPagamento() {
        if (!this.dataUltimoPagamento) {
            return null;
        }
        return new Date(this.dataUltimoPagamento);
    }
    get getCustoFinal() {
        return this.custoFinal;
    }
    get getDescricao() {
        return this.descricao;
    }
};
exports.AssinaturaEntidade = AssinaturaEntidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssinaturaEntidade.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "codigo_plano" }),
    __metadata("design:type", Number)
], AssinaturaEntidade.prototype, "codigoPlano", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "codigo_cliente" }),
    __metadata("design:type", Number)
], AssinaturaEntidade.prototype, "codigoCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], AssinaturaEntidade.prototype, "inicioFidelidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], AssinaturaEntidade.prototype, "fimFidelidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", Object)
], AssinaturaEntidade.prototype, "dataUltimoPagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], AssinaturaEntidade.prototype, "custoFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], AssinaturaEntidade.prototype, "descricao", void 0);
exports.AssinaturaEntidade = AssinaturaEntidade = __decorate([
    (0, typeorm_1.Entity)({ name: 'assinatura' }),
    __metadata("design:paramtypes", [Number, Number, Number, String])
], AssinaturaEntidade);
//# sourceMappingURL=AssinaturaEntidade.js.map