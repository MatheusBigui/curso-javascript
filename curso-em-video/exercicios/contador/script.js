function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: '
        //le o valor dos inputs
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //verifica se o passo é igual a zero ou negativo 
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo como 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }

        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.imnnerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}