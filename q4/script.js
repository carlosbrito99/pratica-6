let notas = [8, 7, 7, 11, 12]

document.querySelector("#result").innerHTML = `
    <h2>A soma das notas é: ${notas.reduce(somar, 0)}</h2>
    <h2>A Média das notas é: ${notas.reduce(somar, 0)/notas.length}
`
function somar(t, n) {
  return t + n
}