var qtdAcertos = 0;

function validar() {
    res1.style.color = "green";
    res2.style.color = "red";
    res3.style.color = "red";

    px1.style.display = "block";
}

function limpar() {
    res1.style.color = "black";
    res2.style.color = "black";
    res3.style.color = "blac";
}

function respostaErrada(){
    validar();
}

function respostaCerta() {
    validar();
    qtdAcertos ++;
    console.log(qtdAcertos);
}

function proximo1() {
    limpar();
    two.style.display = "none";
}