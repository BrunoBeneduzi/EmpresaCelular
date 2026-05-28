"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetornaAssinatura = void 0;
class RetornaAssinatura {
    repositorioAss;
    constructor(repositorioAss) {
        this.repositorioAss = repositorioAss;
    }
    async retornaAssinatura(id) {
        const assinatura = await this.repositorioAss.listaAssinatura(id);
        return this.formataDataEseparaAtivoCanceladoUnico(assinatura);
    }
    async retornaAssinaturaPlano(idPlano) {
        const assinaturaClin = this.formataDataEseparaAtivoCancelado(await this.repositorioAss.listaAssinaturaPorPlano(idPlano));
        return assinaturaClin;
    }
    async retornaAssinaturaPorCliente(idCliente) {
        const assinaturaClin = this.formataDataEseparaAtivoCancelado(await this.repositorioAss.listaAssinaturasDeCliente(idCliente));
        return assinaturaClin;
    }
    async retornaAssinaturaPorTipo(tipo) {
        const novasAssinaturas = [];
        const assinatura = await this.repositorioAss.listaAssinaturas();
        if (tipo === "TODOS") {
            return this.formataDataEseparaAtivoCancelado(assinatura);
        }
        else if (tipo === "ATIVOS") {
            const assinaturaAtivos = this.formataDataEseparaAtivoCancelado(assinatura);
            for (const ass of assinaturaAtivos) {
                if (ass.getStatus === "ATIVO") {
                    novasAssinaturas.push(ass);
                }
            }
            return novasAssinaturas;
        }
        else if (tipo === "CANCELADOS") {
            const assinaturaCancelado = this.formataDataEseparaAtivoCancelado(assinatura);
            for (const ass of assinaturaCancelado) {
                if (ass.getStatus === "CANCELADO") {
                    novasAssinaturas.push(ass);
                }
            }
            return novasAssinaturas;
        }
        else {
            throw new Error("CODIGO INVALIDO");
        }
    }
    formataDataEseparaAtivoCancelado(assinatura) {
        let dataDeHoje = this.hoje();
        if (assinatura.length > 1) {
            for (const ass of assinatura) {
                this.verificaAtivoOuCancelado(ass, dataDeHoje);
            }
        }
        return assinatura;
    }
    formataDataEseparaAtivoCanceladoUnico(assinatura) {
        let dataDeHoje = this.hoje();
        return this.verificaAtivoOuCancelado(assinatura, dataDeHoje);
    }
    verificaAtivoOuCancelado(ass, dataDeHoje) {
        let dataCerta = true;
        let dataInicio = this.toBrasilia(ass.getInicioFidelidade);
        let dataFim = this.toBrasilia(ass.getInicioFidelidade);
        dataFim.setDate(dataFim.getDate() + 30);
        do {
            if (dataInicio.getTime() <= dataDeHoje.getTime() && dataDeHoje.getTime() < dataFim.getTime()) {
                dataCerta = false;
                if (dataInicio.getTime() === ass.getDataUltimoPagamento?.getTime()) {
                    ass.setStatus = "ATIVO";
                }
                else {
                    ass.setStatus = "CANCELADO";
                }
            }
            else {
                dataInicio.setUTCDate(dataInicio.getUTCDate() + 30);
                dataFim.setUTCDate(dataFim.getUTCDate() + 30);
            }
        } while (dataCerta);
        return ass;
    }
    hoje() {
        return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    }
    toBrasilia(data) {
        return new Date(data.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    }
    formataData(data) {
        return data.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    }
}
exports.RetornaAssinatura = RetornaAssinatura;
//# sourceMappingURL=RetornaAssinatura.js.map