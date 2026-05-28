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
exports.RepositorioAssinaturaReq = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AssinaturaEntidade_1 = require("../entity/AssinaturaEntidade");
const typeorm_2 = require("typeorm");
let RepositorioAssinaturaReq = class RepositorioAssinaturaReq {
    assinaturaRepositorio;
    constructor(assinaturaRepositorio) {
        this.assinaturaRepositorio = assinaturaRepositorio;
    }
    async listaAssinatura(id) {
        return await this.assinaturaRepositorio.findOne({
            where: { codigo: id }
        });
    }
    async atualizaDataPagamento(id, dataUltimoPagamento) {
        this.assinaturaRepositorio.update(id, { dataUltimoPagamento: dataUltimoPagamento });
    }
    async cadastraAssinatura(assinatura) {
        return await this.assinaturaRepositorio.save(assinatura);
    }
    async listarAssinaturas() {
        return await this.assinaturaRepositorio.find();
    }
    async listarAssinaturasDoCliente(id) {
        return await this.assinaturaRepositorio.find({
            where: { codigoCliente: id }
        });
    }
    async listarPlanosPorAssinatura(id) {
        return await this.assinaturaRepositorio.find({
            where: { codigoPlano: id }
        });
    }
};
exports.RepositorioAssinaturaReq = RepositorioAssinaturaReq;
exports.RepositorioAssinaturaReq = RepositorioAssinaturaReq = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AssinaturaEntidade_1.AssinaturaEntidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepositorioAssinaturaReq);
//# sourceMappingURL=RepositorioAssinaturaReq.js.map