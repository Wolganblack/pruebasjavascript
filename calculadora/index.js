/*console.log("Script conectado exitosamente");*/

const txtop1 = document.getElementById("operador1");
const txtoperador = document.getElementById("operador");
const txtoperador2 = document.getElementById("operador2");
const btncalculador = document.getElementById("calcular");
const txtresultado = document.getElementById("resultadOperacion");
const presultado = document.getElementById("Resultado1");

/*btncalculador.addEventListener("click", calcular);*/

function calcula() {
    /* console.log("Apretaste el Boton Calcular");*/
    const operador = txtoperador.value;
    const op1 = parseFloat(txtop1.value);
    const op2 = parseFloat(txtoperador2.value);

    if (
        (operador == "+" ||
            operador == "-" ||
            operador == "/" ||
            operador == "*") && (!isNaN(op1) && !isNaN(op2))
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
        txtresultado.style = "color:black"
        presultado.style = "color:black"
        presultado.innerText = "=" + resultadofinal;
        txtresultado.value = "=" + resultadofinal;

    } else {
        presultado.style = "color:red"
        presultado.innerText = "Calculo ImPosible";
        txtresultado.value = "Calculo ImPosible";
        txtresultado.style = "color:red"
    }
    return;
}