"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEntidade = void 0;
const typeorm_1 = require("typeorm");
let ClienteEntidade = class ClienteEntidade {
    codigo;
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    get getNome() {
        return this.nome;
    }
    get getEmail() {
        return this.email;
    }
    get getCodigo() {
        return this.codigo;
    }
};
exports.ClienteEntidade = ClienteEntidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClienteEntidade.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], ClienteEntidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], ClienteEntidade.prototype, "email", void 0);
exports.ClienteEntidade = ClienteEntidade = __decorate([
    (0, typeorm_1.Entity)({ name: 'clientes' }),
    __metadata("design:paramtypes", [String, String])
], ClienteEntidade);
//# sourceMappingURL=ClienteEntidade.js.map