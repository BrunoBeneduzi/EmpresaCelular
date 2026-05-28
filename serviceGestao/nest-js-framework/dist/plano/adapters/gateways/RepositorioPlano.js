"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPlano = void 0;
class RepositorioPlano {
    repositorio;
    mapper;
    constructor(repositorio, mapper) {
        this.repositorio = repositorio;
        this.mapper = mapper;
    }
    cadastraPlano(plano) {
        const entidade = this.mapper.toEntidade(plano);
        this.repositorio.cadastrarPlano(entidade);
        this.mapper.toDominio(entidade);
    }
    async listarPlanos() {
        const lista = await this.repositorio.listarPlanos();
        const novaLista = [];
        for (const p of lista) {
            novaLista.push(this.mapper.toDominio(p));
            novaLista[novaLista.length - 1].setData = p.getData;
        }
        return novaLista;
    }
    async listarPlano(id) {
        const planVerifica = await this.repositorio.listarPlano(id);
        if (!planVerifica) {
            throw new Error("ID PLANO NAO EXISTE");
        }
        return this.mapper.toDominio(planVerifica);
    }
    editaNomePlano(plano) {
        throw new Error("Method not implemented.");
    }
    async editaCustoMensalPlano(id, custoMensal) {
        const resultado = await this.repositorio.listarPlano(id);
        if (!resultado) {
            throw new Error("ID PLANO NAO EXISTE");
        }
        await this.repositorio.editaCustoMensalPlano(id, custoMensal);
        return this.mapper.toDominio(resultado);
    }
    editaDataModificacaoPlano(plano) {
        throw new Error("Method not implemented.");
    }
    editaDescricaoPlano(plano) {
        throw new Error("Method not implemented.");
    }
}
exports.RepositorioPlano = RepositorioPlano;
//# sourceMappingURL=RepositorioPlano.js.map