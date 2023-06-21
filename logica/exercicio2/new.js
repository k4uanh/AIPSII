// let valor, mostrar

// valor=Number(prompt("Valor: "))

// mostrar= valor - 1
// alert ("Numero antecessor é: " + mostrar )

// let mes, idade, dias    

// idade=Number(prompt("Diga sua idade: "))

// mes = (idade*12)
// dias = (idade*365)

// alert ("Você viveu: " + mes + " meses " + " e " + dias + " dias")

let total, brancos, nulos, validos, porcb, porcv, porcn
alert ("Vamos calcular os votos!")
total = Number(prompt("Quantos eleitores? "))
brancos = Number(prompt("Quantos votos brancos? "))
nulos = Number(prompt("Quantos votos nulos? "))
validos = Number(prompt("Quantos votos validos? "))

porcb = ((brancos/total) * 100)
porcn = ((nulos/total) * 100) 
porcv = ((validos/total) * 100)

alert ("Tivemos um total de " + total + " votos contabilizados sendo:" + "/n" + porcb + "% brancos" + "/n" + porcn + "%nulos" 
+ "/n" + porcv + "% validos")