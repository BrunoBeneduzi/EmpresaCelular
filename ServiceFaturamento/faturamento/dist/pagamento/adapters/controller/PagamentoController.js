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
exports.PagamentoController = void 0;
const common_1 = require("@nestjs/common");
const CadastraPagamentoDto_1 = require("../mappers/CadastraPagamentoDto");
const PagamentoEntityMapper_1 = require("../mappers/PagamentoEntityMapper");
let PagamentoController = class PagamentoController {
    cadastro;
    mapper;
    constructor(cadastro, mapper) {
        this.cadastro = cadastro;
        this.mapper = mapper;
    }
    async cadastraPagamento(dto) {
        const dto2 = await this.cadastro.realizaPagamento(this.mapper.toDtoDomain(dto));
        return this.mapper.toDomainDto(dto2);
    }
};
exports.PagamentoController = PagamentoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CadastraPagamentoDto_1.CadastraPagamentoDto]),
    __metadata("design:returntype", Promise)
], PagamentoController.prototype, "cadastraPagamento", null);
exports.PagamentoController = PagamentoController = __decorate([
    (0, common_1.Controller)('registrarPagamento'),
    __param(0, (0, common_1.Inject)('ICADASTRA_PAGAMENTO')),
    __metadata("design:paramtypes", [Object, PagamentoEntityMapper_1.PagamentoEntityMapper])
], PagamentoController);
//# sourceMappingURL=PagamentoController.js.map