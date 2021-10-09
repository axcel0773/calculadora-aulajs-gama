function somar() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    resultado = Number.parseInt(n1) + Number.parseInt(n2);

    window.alert(resultado);
}

function subtracao() {
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;

    resultado = Number.parseInt(n1) - Number.parseInt(n2);

    window.alert(resultado);
}

function multiplicacao() {
    n1 = document.getElementById('n1_mult').value;
    n2 = document.getElementById('n2_mult').value;

    resultado = Number.parseInt(n1) * Number.parseInt(n2);

    window.alert(resultado);
}

function divisao() {
    n1 = document.getElementById('n1_divd').value;
    n2 = document.getElementById('n2_divd').value;

    resultado = Number.parseInt(n1) / Number.parseInt(n2);

    window.alert(resultado);
}