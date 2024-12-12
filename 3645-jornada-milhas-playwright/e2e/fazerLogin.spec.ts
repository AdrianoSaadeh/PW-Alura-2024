import { test } from "./page-objects/PaginaLogin";

test.describe("Fazer Login", () => {
    test("Deve conseguir fazer login com email e senha válidos", async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin("adrianosaadeh@gmail.com", "123456");
        await paginaLogin.loginFeitoComSucesso();
    });

    test("Não deve conseguir fazer login com email inválido", async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin("email.errado@alura.com", "123456");
        await paginaLogin.estaMostrandoMensagemDeErro("Você não está autorizado a acessar este recurso");
    });

    test("Não deve conseguir realizar o login informando e-mail com formato errado", async ({ paginaLogin }) => {
        await paginaLogin.preencheFormatoInvalido("alura.com.br", "123456");
        await paginaLogin.estaMostrandoMensagemDeErro("E-mail inválido");
    });

    test("Não deve conseguir realizar o login se não informar a senha", async ({ paginaLogin }) => {
        await paginaLogin.naoInformarEmailESenha("", "");
        await paginaLogin.estaMostrandoMensagemDeErro("E-mail é obrigatório");
        await paginaLogin.estaMostrandoMensagemDeErro("Senha é obrigatória");
    });
});