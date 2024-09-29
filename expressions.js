let tela
let nunero1
let numero2
let resultado
let expressao

function adicao() {
    numero1 = tela.innerHTML;
    tela.innerHTML = "";
    expressao = "adicao";
}

function sub() {
    numero1 = tela.innerHTML;
    tela.innerHTML = "";
    expressao = "sub";
}

function mult() {
    numero1 = tela.innerHTML;
    tela.innerHTML = "";
    expressao = "mult";
}

function div() {
    numero1 = tela.innerHTML;
    tela.innerHTML = "";
    expressao = "div";
}

function equal() {

    numero2 = tela.innerHTML;
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (expressao === "adicao") {

        resultado = numero1 + numero2;
        tela.innerHTML = resultado;

    }
    if (expressao === "sub") {

        resultado = numero1 - numero2;
        tela.innerHTML = resultado;

    }
    if (expressao === "mult") {

        resultado = numero1 * numero2;
        tela.innerHTML = resultado;

    }
    if (expressao === "div") {

        resultado = numero1 / numero2;
        tela.innerHTML = resultado;

    }

    numero1 = tela.innerHTML;
}
