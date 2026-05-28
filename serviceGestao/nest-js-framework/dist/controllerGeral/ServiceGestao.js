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
exports.ServicoGestao = void 0;
const common_1 = require("@nestjs/common");
const ClienteCadastroDto_1 = require("../cliente/adapters/mappers/ClienteCadastroDto");
const AssinaturaCadastroDto_1 = require("../assinatura/adapters/mappers/AssinaturaCadastroDto");
const AssinaturaDomain_1 = require("../assinatura/domain/AssinaturaDomain");
const AlterarInfPlanoDto_1 = require("../plano/adapters/mappers/AlterarInfPlanoDto");
let ServicoGestao = class ServicoGestao {
    listar;
    cadastrar;
    editar;
    listarPlan;
    editaPlan;
    cadastraAss;
    listarAss;
    constructor(listar, cadastrar, editar, listarPlan, editaPlan, cadastraAss, listarAss) {
        this.listar = listar;
        this.cadastrar = cadastrar;
        this.editar = editar;
        this.listarPlan = listarPlan;
        this.editaPlan = editaPlan;
        this.cadastraAss = cadastraAss;
        this.listarAss = listarAss;
    }
    async cadastraCliente(dto) {
        try {
            const dtoRetorno = await this.cadastrar.cadastraNovoCliente(dto.nome, dto.email);
            return dtoRetorno;
        }
        catch (err) {
            if (err instanceof Error && err.message === "Email Já existe") {
                throw new common_1.ConflictException("O email cadastrado já existe");
            }
        }
    }
    listarClientes() {
        return this.listar.listarTodosOsClientes();
    }
    async listarCliente(id) {
        try {
            const cliente = await this.listar.listarUmCliente(id);
            return cliente;
        }
        catch (err) {
            if (err instanceof Error && err.message === "CLIENTE_NULL") {
                throw new common_1.NotFoundException("Cliente nao encontrado");
            }
        }
    }
    listarPlanos() {
        return this.listarPlan.listarPlanos();
    }
    async listarPlano(id) {
        try {
            return await this.listarPlan.listaPlano(id);
        }
        catch (err) {
            if (err instanceof Error && err.message === "ID PLANO NAO EXISTE") {
                throw new common_1.NotFoundException("Plano não existe");
            }
        }
    }
    async cadastraAssinatura(dto) {
        try {
            const ass = await this.cadastraAss.cadastraAssinatura(new AssinaturaDomain_1.AssinaturaDomain(dto.codPlano, dto.codCli, dto.custoFinal, dto.descricao));
            return new AssinaturaCadastroDto_1.AssinaturaCadastroDto(ass.getCodigoCliente, ass.getCodigoPlano, ass.getCustoFinal, ass.getDescricao);
        }
        catch (err) {
            if (err instanceof Error && err.message === "CLIENTE_NULL") {
                throw new common_1.NotFoundException("Cliente não encontrado");
            }
            else if (err instanceof Error && err.message === "ID PLANO NAO EXISTE") {
                throw new common_1.NotFoundException("ID plano não");
            }
        }
    }
    async alteraCustoMensal(id, dto) {
        try {
            const plano = await this.editaPlan.editaCustoMensalPlano(id, dto.custoMensal);
            return plano;
        }
        catch (err) {
            if (err instanceof Error && err.message === "ID PLANO NAO EXISTE") {
                throw new common_1.NotFoundException("ID plano não existe");
            }
        }
    }
    async retornaTipoAssinatura(tipo) {
        try {
            return await this.listarAss.retornaAssinaturaPorTipo(tipo);
        }
        catch (err) {
            if (err instanceof Error && err.message === "CODIGO INVALIDO") {
                throw new common_1.NotFoundException("CODIGO INVALIDO");
            }
        }
    }
    async retornaAssinaturaCliente(codcli) {
        const ass = await this.listarAss.retornaAssinaturaPorCliente(codcli);
        const dto = ass.map(u => ({ codigoAssinatura: u.getCodigo, codigoCliente: u.getCodigoCliente, codigoPlano: u.getCodigoPlano, DateInicio: u.getInicioFidelidade, dataFim: u.getFimFidelidade, status: u.getStatus }));
        return dto;
    }
    retornaAssinaturasPlanos(codplano) {
        return this.listarAss.retornaAssinaturaPlano(codplano);
    }
};
exports.ServicoGestao = ServicoGestao;
__decorate([
    (0, common_1.Post)('cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClienteCadastroDto_1.ClienteCadastroDto]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "cadastraCliente", null);
__decorate([
    (0, common_1.Get)('clientes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServicoGestao.prototype, "listarClientes", null);
__decorate([
    (0, common_1.Get)('cliente/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "listarCliente", null);
__decorate([
    (0, common_1.Get)('planos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServicoGestao.prototype, "listarPlanos", null);
__decorate([
    (0, common_1.Get)('plano/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "listarPlano", null);
__decorate([
    (0, common_1.Post)('assinaturas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AssinaturaCadastroDto_1.AssinaturaCadastroDto]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "cadastraAssinatura", null);
__decorate([
    (0, common_1.Patch)('planos/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, AlterarInfPlanoDto_1.AlteraInfPlanoDto]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "alteraCustoMensal", null);
__decorate([
    (0, common_1.Get)('assinaturas/:tipo'),
    __param(0, (0, common_1.Param)("tipo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "retornaTipoAssinatura", null);
__decorate([
    (0, common_1.Get)('asscli/:codcli'),
    __param(0, (0, common_1.Param)('codcli')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServicoGestao.prototype, "retornaAssinaturaCliente", null);
__decorate([
    (0, common_1.Get)('assinaturaplano/:codplano'),
    __param(0, (0, common_1.Param)('codplano')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServicoGestao.prototype, "retornaAssinaturasPlanos", null);
exports.ServicoGestao = ServicoGestao = __decorate([
    (0, common_1.Controller)('gestao'),
    __param(0, (0, common_1.Inject)('ILISTA_CLIENTE')),
    __param(1, (0, common_1.Inject)('ICADASTRA_CLIENTE')),
    __param(2, (0, common_1.Inject)('IEDITA_CLIENTE')),
    __param(3, (0, common_1.Inject)('ILISTA_PLANO')),
    __param(4, (0, common_1.Inject)('IEDITA_PLANO')),
    __param(5, (0, common_1.Inject)('ICADASTRA_ASSINATURA')),
    __param(6, (0, common_1.Inject)('IRETORNA_ASSINATURA')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], ServicoGestao);
//# sourceMappingURL=ServiceGestao.js.map