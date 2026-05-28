"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoEntityMapper = void 0;
const PagamentoDomain_1 = require("../../domain/PagamentoDomain");
const PagamentoEntidade_1 = require("../../infra/persistence/entity/PagamentoEntidade");
const CadastraPagamentoDto_1 = require("./CadastraPagamentoDto");
class PagamentoEntityMapper {
    toDomainEntidade(pagamento) {
        return new PagamentoEntidade_1.PagamentoEntidade(pagamento.getCodigoAssinatura, pagamento.getValorPago, pagamento.getDataPagamento);
    }
    toEntidadeDomain(pagamento) {
        return new PagamentoDomain_1.PagamentoDomain(pagamento.getCodigoAssinatura, pagamento.getValorPago, pagamento.getDataPagamento);
    }
    toDomainDto(pagamento) {
        return new CadastraPagamentoDto_1.CadastraPagamentoDto(pagamento.getDataPagamento.getDate(), pagamento.getDataPagamento.getMonth(), pagamento.getDataPagamento.getFullYear(), pagamento.getCodigoAssinatura, pagamento.getValorPago);
    }
    toDtoDomain(pagamento) {
        return new PagamentoDomain_1.PagamentoDomain(pagamento.codAss, pagamento.valorPago, new Date(pagamento.ano, pagamento.mes - 1, pagamento.dia));
    }
}
exports.PagamentoEntityMapper = PagamentoEntityMapper;
//# sourceMappingURL=PagamentoEntityMapper.js.map