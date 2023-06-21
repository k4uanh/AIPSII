function soma(n1, n2){
    n1 = parseInt(document.getElementById("Valor1").value)
    n2 = parseInt(document.getElementById("Valor2").value)
    let result = n1 + n2
alert(result)
}
function sub(n1, n2){
    n1 = parseInt(document.getElementById("Valor1").value)
    n2 = parseInt(document.getElementById("Valor2").value)
    let result = n1 - n2
alert(result)
}
function div(n1, n2){
    n1 = parseInt(document.getElementById("Valor1").value)
    n2 = parseInt(document.getElementById("Valor2").value)
    let result = n1 / n2
    if(n2 == 0){
    alert("O divisor não pode ser igual a Zero!")
    }else{
    alert(result)}
}

function mult(n1, n2){
    n1 = parseInt(document.getElementById("Valor1").value)
    n2 = parseInt(document.getElementById("Valor2").value)
    let result = n1 * n2
alert(result)
}