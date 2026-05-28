"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioCliente = void 0;
const ClienteDomain_1 = require("../../domain/ClienteDomain");
class RepositorioCliente {
    mapper;
    repositorio;
    constructor(repositorio, mapper) {
        this.mapper = mapper;
        this.repositorio = repositorio;
    }
    async cadastraCliente(nome, emaiil) {
        const verificaExistencia = await this.repositorio.verificaSeClinteExiste(emaiil);
        if (verificaExistencia?.email) {
            throw new Error("Email Já existe");
        }
        const entidade = this.mapper.toEntidade(new ClienteDomain_1.ClienteDomain(nome, emaiil));
        const dominio = await this.repositorio.cadastraCliente(entidade);
        return this.mapper.toDominio(dominio);
    }
    async listarClientes() {
        const cliente = this.repositorio.listarClientes();
        const novaLista = [];
        for (const c of await cliente) {
            novaLista.push(this.mapper.toDominio(c));
        }
        return novaLista;
    }
    async listarCliente(id) {
        const constEnt = await this.repositorio.listarCliente(id);
        if (!constEnt) {
            throw new Error("CLIENTE_NULL");
        }
        return this.mapper.toDominio(constEnt);
    }
    editaEmailCliente(cliente) {
        return new ClienteDomain_1.ClienteDomain("x", "s");
    }
    editaNomeCliente(cliente) {
        return new ClienteDomain_1.ClienteDomain("x", "s");
    }
}
exports.RepositorioCliente = RepositorioCliente;
//# sourceMappingURL=RepositorioCliente.js.map