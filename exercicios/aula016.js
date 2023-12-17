let num = [10, 20, 30, 40, 50]


for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}
console.log('')
for (n in num) {
    console.log(num[n])
}
console.log('')

for (n of num) {
    console.log(n)
}

//mexendo no HTML

const objeto = document.getElementsByTagName('div')

for (o in objeto) {
    console.log(objeto[o].innerHTML)
}

for (o of objeto) {
    console.log(o.innerHTML = "Curso")
}