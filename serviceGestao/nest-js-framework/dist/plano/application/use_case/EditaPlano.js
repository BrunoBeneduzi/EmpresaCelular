"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditaPlano = void 0;
class EditaPlano {
    editaPlano;
    constructor(editaPlano) {
        this.editaPlano = editaPlano;
    }
    editaNomePlano(plano) {
        this.editaPlano.editaNomePlano(plano);
    }
    editaCustoMensalPlano(id, custoMensal) {
        return this.editaPlano.editaCustoMensalPlano(id, custoMensal);
    }
    editaDataModificacaoPlano(plano) {
        this.editaPlano.editaDataModificacaoPlano(plano);
    }
    editaDescricaoPlano(plano) {
        this.editaPlano.editaDescricaoPlano(plano);
    }
}
exports.EditaPlano = EditaPlano;
//# sourceMappingURL=EditaPlano.js.map