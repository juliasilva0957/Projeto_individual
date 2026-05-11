var usuarioModel = require("../models/usuarioModel");
var forumoModel = require("../models/forumModel");

function autenticar(req, res) {
    var nomeUsuario = req.body.nomeUsuario;
    var senha = req.body.senha;

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.autenticar(nomeUsuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar)
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nome;
    var nomeUsuario = req.body.nomeUsuario;
    var email = req.body.email;
    var senha = req.body.senha;
    var cpf = req.body.cpf;
    var imagemPerfil = req.file.filename;

    console.log(nome)
    console.log(email)
    console.log(senha)
    console.log(cpf)

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }else if (nomeUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");}
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, nomeUsuario, email, cpf, senha, imagemPerfil)
                .then(
                    function (resultado) {
                        res.json(resultado);
                        console.log(resultado)
                    }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}