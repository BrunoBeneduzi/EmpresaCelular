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
exports.RepositorioClienteReq = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ClienteEntidade_1 = require("../entity/ClienteEntidade");
const typeorm_2 = require("typeorm");
let RepositorioClienteReq = class RepositorioClienteReq {
    clienteRepositorio;
    constructor(clienteRepositorio) {
        this.clienteRepositorio = clienteRepositorio;
    }
    async cadastraCliente(cliente) {
        const clienteEnti = await this.clienteRepositorio.save(cliente);
        return clienteEnti;
    }
    async listarClientes() {
        return await this.clienteRepositorio.find();
    }
    async listarCliente(id) {
        return await this.clienteRepositorio.findOne({
            where: { codigo: id }
        });
    }
    async verificaSeClinteExiste(emaiil) {
        return await this.clienteRepositorio.findOne({
            where: { email: emaiil }
        });
    }
};
exports.RepositorioClienteReq = RepositorioClienteReq;
exports.RepositorioClienteReq = RepositorioClienteReq = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ClienteEntidade_1.ClienteEntidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepositorioClienteReq);
//# sourceMappingURL=RepositorioClienteReq.js.map