
function converter(){
    let resultado = document.getElementById("resultado")
    let valoremdolar = document.getElementById("valor").value
    let dolarDoDia = 5.81

    let valorReal = valoremdolar * dolarDoDia

    resultado.innerHTML = "$ " + valorReal 
    console.log(valorReal)

}