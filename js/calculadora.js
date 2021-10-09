function somar() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    resultado = Number.parseInt(n1) + Number.parseInt(n2);

    document.getElementById("resultado_soma").value = resultado;
}

function subtracao() {
    n1 = document.getElementById("n1_sub").value;
    n2 = document.getElementById("n2_sub").value;

    resultado = Number.parseInt(n1) - Number.parseInt(n2);

    document.getElementById("resultado_sub").value = resultado;
}

function multiplicacao() {
    n1 = document.getElementById("n1_mult").value;
    n2 = document.getElementById("n2_mult").value;

    resultado = Number.parseInt(n1) * Number.parseInt(n2);

    document.getElementById("resultado_mult").value = resultado;
}

function divisao() {
    n1 = document.getElementById("n1_divd").value;
    n2 = document.getElementById("n2_divd").value;

    resultado = Number.parseInt(n1) / Number.parseInt(n2);

    document.getElementById("resultado_divd").value = resultado;
}

function media() {
    n1 = document.getElementById("n1_med").value;
    n2 = document.getElementById("n2_med").value;
    n3 = document.getElementById("n3_med").value;

    resultado =
        (Number.parseFloat(n1) +
            Number.parseFloat(n2) +
            Number.parseFloat(n3)) /
        3;

    document.getElementById("resultado_med").value = resultado;
}

function limpar() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('resultado_soma').value = "";
}