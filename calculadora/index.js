/*console.log("Script conectado exitosamente");*/

const txtop1 = document.getElementById("operador1");
const txtoperador = document.getElementById("operador");
const txtoperador2 = document.getElementById("operador2");
const btncalculador = document.getElementById("calcular");
const txtresultado = document.getElementById("resultado");
const presultado = document.getElementById("Resultado1");

/*btncalculador.addEventListener("click", calcular);*/

function calcula() {
    /* console.log("Apretaste el Boton Calcular");*/
    const operador = txtoperador.value;
    const op1 = parseFloat(txtop1.value);
    const op2 = parseFloat(txtoperador2.value);

    if (
        operador == "+" ||
        operador == "-" ||
        operador == "/" ||
        operador == "*"
    ) {

        let resultadofinal;
        switch (operador) {
            case "+":
                resultadofinal = op1 + op2
                break;

            case "-":
                resultadofinal = op1 - op2
                break;

            case "*":
                resultadofinal = op1 * op2
                break;

            case "/":
                resultadofinal = op1 / op2
                break;

        }
        presultado.innerText = "=" + resultadofinal;
        txtresultado.innerText = "=" + resultadofinal;
    } else {
        presultado.innerText = "Calculo ImPosible";
        txtresultado.innerText = "Calculo ImPosible";
    }
    return;
}