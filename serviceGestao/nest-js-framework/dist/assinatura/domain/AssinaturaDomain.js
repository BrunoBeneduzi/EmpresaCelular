"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssinaturaDomain = void 0;
class AssinaturaDomain {
    codigo;
    codigoPlano;
    codigoCliente;
    inicioFidelidade;
    fimFidelidade;
    dataUltimoPagamento;
    custoFinal;
    descricao;
    status;
    constructor(codigoPlano, codigoCliente, custoFinal, descricao) {
        this.codigoCliente = codigoCliente;
        this.codigoPlano = codigoPlano;
        this.custoFinal = custoFinal;
        this.descricao = descricao;
    }
    set setStatus(status) {
        this.status = status;
    }
    set setCodigo(codigo) {
        this.codigo = codigo;
    }
    set setInicioFidelidade(inicioFidelidade) {
        this.inicioFidelidade = inicioFidelidade;
    }
    set setFimFidelidade(fimFidelidade) {
        this.fimFidelidade = fimFidelidade;
    }
    set setDataUltimoPagamento(dataUltimoPagamento) {
        this.dataUltimoPagamento = dataUltimoPagamento;
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
    get getStatus() {
        return this.status;
    }
}
exports.AssinaturaDomain = AssinaturaDomain;
//# sourceMappingURL=AssinaturaDomain.js.map