
function converter() {
    let resultado = document.getElementById("resultado")
    let valorEmReal = document.getElementById("valor").value
    let dolarDoDia = 5.81 

    let valorEmDolar = valorEmReal / dolarDoDia

    resultado.innerHTML = "$ " + valorEmDolar.toFixed(2)
    console.log(valorEmDolar)
}