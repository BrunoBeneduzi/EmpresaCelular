"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastraAssinatura = void 0;
class CadastraAssinatura {
    repositorioAss;
    repositorioClin;
    repositorioPlan;
    constructor(repositorioAss, repositorioClin, repositorioPlan) {
        this.repositorioAss = repositorioAss;
        this.repositorioClin = repositorioClin;
        this.repositorioPlan = repositorioPlan;
    }
    async cadastraAssinatura(assinatura) {
        await this.repositorioClin.listarCliente(assinatura.getCodigoCliente);
        await this.repositorioPlan.listarPlano(assinatura.getCodigoPlano);
        return this.repositorioAss.cadastrarAssinatura(assinatura);
    }
}
exports.CadastraAssinatura = CadastraAssinatura;
//# sourceMappingURL=CadastraAssinatura.js.map