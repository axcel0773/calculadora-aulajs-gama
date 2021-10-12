function somar() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    let msgError = document.getElementsByClassName("error");

    //Validação negada
    if (!validacao(n1, n2)) {
        //Exibe o erro

        msgError[0].innerHTML =
            "Um ou mais campos na soma, não foram preenchidos";
    } else {
        //Faz o cálculo
        resultado = Number.parseInt(n1) + Number.parseInt(n2);

        document.getElementById("resultado_soma").value = resultado;
        msgError[0].innerHTML = "";
    }
}

function subtracao() {
    n1 = document.getElementById("n1_sub").value;
    n2 = document.getElementById("n2_sub").value;

    let msgError = document.getElementsByClassName("error");

    if (!validacao(n1, n2)) {
        msgError[1].innerHTML =
            "Um ou mais campos na subtração, não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) - Number.parseInt(n2);

        document.getElementById("resultado_sub").value = resultado;
        msgError[1].innerHTML = "";
    }
}

function multiplicacao() {
    n1 = document.getElementById("n1_mult").value;
    n2 = document.getElementById("n2_mult").value;

    let msgError = document.getElementsByClassName("error");

    if (!validacao(n1, n2)) {
        msgError[2].innerHTML =
            "Um ou mais campos na multiplicação, não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) * Number.parseInt(n2);

        document.getElementById("resultado_mult").value = resultado;
        msgError[2].innerHTML = "";
    }
}

function divisao() {
    n1 = document.getElementById("n1_divd").value;
    n2 = document.getElementById("n2_divd").value;

    let msgError = document.getElementsByClassName("error");

    if (!validacao(n1, n2)) {
        msgError[3].innerHTML =
            "Um ou mais campos na divisão, não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) / Number.parseInt(n2);

        document.getElementById("resultado_divd").value = resultado;
        msgError[3].innerHTML = "";
    }
}

function media() {
    n1 = document.getElementById("n1_med").value;
    n2 = document.getElementById("n2_med").value;
    n3 = document.getElementById("n3_med").value;

    let msgError = document.getElementsByClassName("error");

    if (!validacao(n1, n2, n3)) {
        msgError[4].innerHTML =
            "Um ou mais campos na media, não foram preenchidos";
    } else {
        resultado =
            (Number.parseFloat(n1) +
                Number.parseFloat(n2) +
                Number.parseFloat(n3)) /
            3;

        document.getElementById("resultado_med").value = resultado.toFixed(2);
        msgError[4].innerHTML = "";
    }
}

function limpar() {
    let inputs_text = document.getElementsByClassName("form");

    for (i = 0; i < inputs_text.length; i++) {
        inputs_text[i].value = "";
    }
}

function limpa_array() {
    let inputs_text = document.getElementsByClassName("form");
    console.log(inputs_text);

    for (input in inputs_text) {
        inputs_text[input].value = "";
    }
}

function limpa_for_each() {
    let inputs_text = document.getElementsByClassName("form");
    let inputs_array = Array.prototype.slice.call(inputs_text);

    inputs_array.forEach(function (e) {
        console.log(e);
        e.value = "";
    });
}

function validacao(n1, n2, n3 = null) {
    if (
        n1.trim() === "" ||
        n2.trim() === "" ||
        (n3 != null && n3.trim() === "")
    ) {
        return false;
    } else {
        return true;
    }
}

function example_loop() {
    let loop = document.getElementById("loop");
    let msg_loop = "";

    for (i = 0; i < 10; i++) {
        msg_loop += "<p> " + i + " <10 </p>";
    }

    loop.innerHTML = msg_loop;
}

function example_while() {
    let loop = document.getElementById("loop");
    let msg_loop = "";
    i = 0;

    while (i < 10) {
        msg_loop += "<p> " + i + " <10 </p>";
        i++;
    }
    loop.innerHTML = msg_loop;
}

function example_do_while() {
    let loop = document.getElementById("loop");
    let msg_loop = "";
    i = 0;
    validate = true;
    do {
        msg_loop += "<p> " + i + " <10 </p>";
        if (i + 1 < 10) {
            i++;
        } else {
            validate = false;
        }
    } while (validate);

    loop.innerHTML = msg_loop;
}
