"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioAssinatura = void 0;
const common_1 = require("@nestjs/common");
class RepositorioAssinatura {
    repositorio;
    mapper;
    constructor(repositorio, mapper) {
        this.repositorio = repositorio;
        this.mapper = mapper;
    }
    async listaAssinatura(id) {
        const assinatura = await this.repositorio.listaAssinatura(id);
        if (assinatura == null) {
            throw new common_1.NotFoundException('Assinatura não encontrada');
        }
        const assinatura2 = this.mapper.toDominio(assinatura);
        assinatura2.setCodigo = assinatura.codigo;
        assinatura2.setDataUltimoPagamento = assinatura.getDataUltimoPagamento;
        assinatura2.setInicioFidelidade = assinatura.getInicioFidelidade;
        return assinatura2;
    }
    atualizaDataPagamento(id, dataUltimoPagamento) {
        this.repositorio.atualizaDataPagamento(id, dataUltimoPagamento);
    }
    async listaAssinaturaPorPlano(id) {
        const novaLista = [];
        for (const ass of await this.repositorio.listarPlanosPorAssinatura(id)) {
            novaLista.push(this.mapper.toDominio(ass));
            novaLista[novaLista.length - 1].setCodigo = ass.getCodigo;
            novaLista[novaLista.length - 1].setInicioFidelidade = ass.getInicioFidelidade;
            novaLista[novaLista.length - 1].setFimFidelidade = ass.getFimFidelidade;
            novaLista[novaLista.length - 1].setDataUltimoPagamento = ass.getDataUltimoPagamento;
        }
        return novaLista;
    }
    async listaAssinaturasDeCliente(id) {
        const novaLista = [];
        for (const ass of await this.repositorio.listarAssinaturasDoCliente(id)) {
            novaLista.push(this.mapper.toDominio(ass));
            novaLista[novaLista.length - 1].setCodigo = ass.getCodigo;
            novaLista[novaLista.length - 1].setInicioFidelidade = ass.getInicioFidelidade;
            novaLista[novaLista.length - 1].setFimFidelidade = ass.getFimFidelidade;
            novaLista[novaLista.length - 1].setDataUltimoPagamento = ass.getDataUltimoPagamento;
        }
        return novaLista;
    }
    async listaAssinaturas() {
        const assinaturaConversao = await this.repositorio.listarAssinaturas();
        const novaLista = [];
        for (const ass of assinaturaConversao) {
            novaLista.push(this.mapper.toDominio(ass));
            novaLista[novaLista.length - 1].setCodigo = ass.getCodigo;
            novaLista[novaLista.length - 1].setInicioFidelidade = ass.getInicioFidelidade;
            novaLista[novaLista.length - 1].setFimFidelidade = ass.getFimFidelidade;
            novaLista[novaLista.length - 1].setDataUltimoPagamento = ass.getDataUltimoPagamento;
        }
        return novaLista;
    }
    async cadastrarAssinatura(assinatura) {
        const assinaturaEntidade = this.mapper.toEntidade(assinatura);
        const entidade = await this.repositorio.cadastraAssinatura(assinaturaEntidade);
        return this.mapper.toDominio(entidade);
    }
}
exports.RepositorioAssinatura = RepositorioAssinatura;
//# sourceMappingURL=RepositorioAssinatura.js.map