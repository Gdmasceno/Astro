var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    database.executar(instrucao);

    var instrucao = `
    INSERT INTO peso(fkUsuario,planeta,peso) VALUES (1,'lua',0),
                                                    (1,'marte',0),
                                                    (1,'júpiter',0),
                                                    (1,'mercúrio',0),
                                                    (1,'terra',0);
    `;
    database.executar(instrucao);

    var instrucao = `
    INSERT INTO quiz(fkUsuario,qtdAcerto,qtdErro) VALUES (1,0,0);
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrarQuiz(id, acerto, erro) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE quiz SET fkUsuario = ${id} where idQuiz = 1;
    `;
    database.executar(instrucao);

    var instrucao = `
        UPDATE quiz SET qtdAcerto = ${acerto} where idQuiz = 1;
    `;
    database.executar(instrucao);

    var instrucao = `
        UPDATE quiz SET qtdErro = ${erro} where idQuiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function cadastrarPeso(id, peso) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
        UPDATE peso SET peso = ${peso.pesoTerra} where planeta = "terra";
    `;
    database.executar(instrucao);

    var instrucao = `
    UPDATE peso SET peso = ${peso.pesoLua} where planeta = "lua";

    `;
    database.executar(instrucao);


    var instrucao = `
    UPDATE peso SET peso = ${peso.pesoMarte} where planeta = "marte";

    `;
    database.executar(instrucao);

    var instrucao = `
    UPDATE peso SET peso = ${peso.pesoJupiter} where planeta = "júpiter";

    `;
    database.executar(instrucao);

    var instrucao = `
    UPDATE peso SET peso = ${peso.pesoMercurio} where planeta = "mercúrio";

    `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function listarPeso(id) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT planeta, peso from peso where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuiz(id) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT qtdAcerto, qtdErro from quiz where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarQuiz,
    cadastrarPeso,
    listarPeso,
    listarQuiz,
};