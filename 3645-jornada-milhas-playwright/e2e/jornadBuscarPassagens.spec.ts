import test from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrinciapl";

test.describe("Buscar Passagens", () => {
    test("Deve buscar somente passagem de ida", async ({ page }) => {
        const paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar();
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(1);
        await paginaPrincipal.definirPassageirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino("Rio Grande do Sul", "santa catarina");
    });
});