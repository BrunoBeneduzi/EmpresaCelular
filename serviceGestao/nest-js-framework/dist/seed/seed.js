"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const typeorm_1 = require("typeorm");
const ClienteEntidade_1 = require("../cliente/infra/persistence/entity/ClienteEntidade");
const PlanoEntidade_1 = require("../plano/infra/persistence/entity/PlanoEntidade");
const AssinaturaEntidade_1 = require("../assinatura/infra/persistence/entity/AssinaturaEntidade");
async function seed() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    const repoClin = dataSource.getRepository(ClienteEntidade_1.ClienteEntidade);
    const repoPlan = dataSource.getRepository(PlanoEntidade_1.PlanoEntidade);
    const repoAss = dataSource.getRepository(AssinaturaEntidade_1.AssinaturaEntidade);
    const cliente = await repoClin.save([
        new ClienteEntidade_1.ClienteEntidade("Pessoa1", "Pessoa1@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa2", "Pessoa2@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa3", "pessoa3@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa4", "Pessoa4@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa5", "Pessoa5@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa6", "Pessoa6@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa7", "Pessoa7@hotmail.com"),
        new ClienteEntidade_1.ClienteEntidade("Pessoa8", "Pessoa8@hotmail.com")
    ]);
    const planos = await repoPlan.save([
        new PlanoEntidade_1.PlanoEntidade("Plus", 80, "Um plano com beneficos plus"),
        new PlanoEntidade_1.PlanoEntidade("Basic", 50, "Um plano com otimas ofertas basicas"),
        new PlanoEntidade_1.PlanoEntidade("Basic + ", 60, "Um plano superior ao basic"),
        new PlanoEntidade_1.PlanoEntidade("Premium", 100, "Um plano quase superior"),
        new PlanoEntidade_1.PlanoEntidade("Premium + ", 150, "O melhor plano para assinar")
    ]);
    const assiantura = await repoAss.save([
        new AssinaturaEntidade_1.AssinaturaEntidade(planos[0].getCodigo, cliente[0].getCodigo, 50, "Promoção de primeira assinatura"),
        new AssinaturaEntidade_1.AssinaturaEntidade(planos[1].getCodigo, cliente[1].getCodigo, 40, "Promoção de natal"),
        new AssinaturaEntidade_1.AssinaturaEntidade(planos[2].getCodigo, cliente[2].getCodigo, 30, "Promoção de dia da arvore"),
        new AssinaturaEntidade_1.AssinaturaEntidade(planos[3].getCodigo, cliente[3].getCodigo, 70, "promoçao temporaria para novos assinantes"),
        new AssinaturaEntidade_1.AssinaturaEntidade(planos[4].getCodigo, cliente[4].getCodigo, 100, "Promoção por ser o cliente numero cinco")
    ]);
    await app.close();
}
seed();
//# sourceMappingURL=seed.js.map