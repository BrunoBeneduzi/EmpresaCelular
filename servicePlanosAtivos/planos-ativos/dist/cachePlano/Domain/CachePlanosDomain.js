"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachePlanosDomain = void 0;
class CachePlanosDomain {
    codigo;
    status;
    codAss;
    constructor(codAss, status) {
        this.status = status;
        this.codAss = codAss;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getStatus() {
        return this.status;
    }
}
exports.CachePlanosDomain = CachePlanosDomain;
//# sourceMappingURL=CachePlanosDomain.js.map