"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoDomain = void 0;
class PlanoDomain {
    codigo;
    nome;
    custoMensal;
    data;
    descricao;
    constructor(nome, custoMensal, descricao) {
        this.nome = nome;
        this.custoMensal = custoMensal;
        this.descricao = descricao;
    }
    set setData(data) {
        this.data = data;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getNome() {
        return this.nome;
    }
    get getCustoMensal() {
        return this.custoMensal;
    }
    get getData() {
        return this.data;
    }
    get getDescricao() {
        return this.descricao;
    }
}
exports.PlanoDomain = PlanoDomain;
//# sourceMappingURL=PlanoDomain.js.map