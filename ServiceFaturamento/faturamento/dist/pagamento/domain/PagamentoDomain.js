"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDomain = void 0;
class PagamentoDomain {
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
}
exports.PagamentoDomain = PagamentoDomain;
//# sourceMappingURL=PagamentoDomain.js.map