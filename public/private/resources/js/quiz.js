var qtdAcertos = 0;

function validar() {
    res1.style.color = "green";
    res2.style.color = "red";
    res3.style.color = "red";

    res1B.style.color = "green";
    res2B.style.color = "red";
    res3B.style.color = "red";

    res1C.style.color = "red";
    res2C.style.color = "green";
    res3C.style.color = "red";

    res1D.style.color = "red";
    res2D.style.color = "red";
    res3D.style.color = "green";

    res1E.style.color = "red";
    res2E.style.color = "red";
    res3E.style.color = "green";

    res1F.style.color = "red";
    res2F.style.color = "green";
    res3F.style.color = "red";

    res1G.style.color = "green";
    res2G.style.color = "red";
    res3G.style.color = "red";

    res1H.style.color = "green";
    res2H.style.color = "red";
    res3H.style.color = "red";

    res1I.style.color = "red";
    res2I.style.color = "green";
    res3I.style.color = "red";

    res1J.style.color = "red";
    res2J.style.color = "red";
    res3J.style.color = "green";


    px1.style.display = "block";
    px1B.style.display = "block";
    px1C.style.display = "block";
    px1D.style.display = "block";
    px1E.style.display = "block";
    px1F.style.display = "block";
    px1G.style.display = "block";
    px1H.style.display = "block";
    px1I.style.display = "block";
    px1J.style.display = "block";
}

function limpar() {
    res1.style.color = "black";
    res2.style.color = "black";
    res3.style.color = "black";

    res1B.style.color = "black";
    res2B.style.color = "black";
    res3B.style.color = "black";

    res1C.style.color = "black";
    res2C.style.color = "black";
    res3C.style.color = "black";

    res1D.style.color = "black";
    res2D.style.color = "black";
    res3D.style.color = "black";

    res1E.style.color = "black";
    res2E.style.color = "black";
    res3E.style.color = "black";

    res1F.style.color = "black";
    res2F.style.color = "black";
    res3F.style.color = "black";

    res1G.style.color = "black";
    res2G.style.color = "black";
    res3G.style.color = "black";

    res1H.style.color = "black";
    res2H.style.color = "black";
    res3H.style.color = "black";

    res1I.style.color = "black";
    res2I.style.color = "black";
    res3I.style.color = "black";

    res1J.style.color = "black";
    res2J.style.color = "black";
    res3J.style.color = "black";

    px1B.style.display = "none";
    px1B.style.display = "none";
    px1C.style.display = "none";
    px1D.style.display = "none";
    px1E.style.display = "none";
    px1F.style.display = "none";
    px1G.style.display = "none";
    px1H.style.display = "none";
    px1I.style.display = "none";
    px1J.style.display = "none";
}

function respostaErrada(){
    validar();
}

function respostaCerta() {
    qtdAcertos ++;
    validar();
    console.log(qtdAcertos);
}

function proximo1() {
    limpar();
    two.style.display = "none";
    three.style.display = "flex";
}

function proximo2() {
    limpar();
    three.style.display = "none";
    four.style.display = "flex";
}

function proximo3() {
    limpar();
    four.style.display = "none";
    five.style.display = "flex";
}

function proximo4() {
    limpar();
    five.style.display = "none";
    six.style.display = "flex";
}

function proximo5() {
    limpar();
    six.style.display = "none";
    seven.style.display = "flex";
}

function proximo6() {
    limpar();
    seven.style.display = "none";
    eight.style.display = "flex";
}

function proximo7() {
    limpar();
    eight.style.display = "none";
    nine.style.display = "flex";
}

function proximo8() {
    limpar();
    nine.style.display = "none";
    ten.style.display = "flex";
}

function proximo9() {
    limpar();
    ten.style.display = "none";
    eleven.style.display = "flex";
}

function proximo10() {
    limpar();
    eleven.style.display = "none";
    telaFinal.style.display = "flex";
    acertos.innerHTML = `Você acertou ${qtdAcertos}/10`;

    if(qtdAcertos > 6){
        msg.innerHTML = "Um verdadeiro astronauta!!";
        imagem.src = "resources/img/astronauta.webp";
    }

    else if(qtdAcertos >3 && qtdAcertos <= 6){
        msg.innerHTML = "Um belo viajante mas precisa melhorar...";
        imagem.src = "resources/img/astronauta2.webp";
    }

    else{
        msg.innerHTML = "Você não foi muito bem.. Mas nao desista! <br> A ASTRO acredita em vc!!";
        imagem.src = "resources/img/astronauta3.webp";
    }

    // console.log(qtdAcertos);
}





function cadastrarQuiz() {
    console.log("ENTREI NO CADASTRAR QUIZ");
    // aguardar();
    var idUsuario = sessionStorage.ID_USUARIO;
    var qtdAcertoVar = qtdAcertos;
    var qtdErro = 10 - qtdAcertos;


    fetch("/usuarios/cadastrarQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
            acertoServer: qtdAcertoVar,
            erroServer: qtdErro,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block"
            // mensagem_erro.innerHTML = "Cadastro realizado com sucesso!";
            window.location = "quiz.html";
            // limparFormulario();
            // finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}