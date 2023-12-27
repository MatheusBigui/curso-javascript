let n = 0
let max = 1000

while (n < max) {
    console.log("Matheus - " + n)
    n++
    if (n > 10) {
        break//para a execução
    }
}

console.log("Fim do programa")

let n2 = 0
let max2 = 1000
let pares = 0

for (let i = n2; i < max; i++) {
    if (i % 2 != 0) {
        continue//para a interação atual e pula para a próxima
    }
    pares++
}
console.log("Quantidade de números pares: " + pares)
console.log("Fim do programa")